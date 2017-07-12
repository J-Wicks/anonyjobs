import numpy as np
import pandas as pd
import sys

pd.options.mode.chained_assignment = None

# Vectorizers to transform data
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer

tfidf = TfidfTransformer()

# Get the dataset from Heroku
url = 'https://serene-forest-99801.herokuapp.com/'
dataset = pd.read_json(url)

# Get the testing string from JS
testString = sys.argv[1]
### GENDER

# Buckets are 'Man', 'Woman', 'Other'

genderVectorizer = CountVectorizer()

# Set variables to bucket alike-categories
man = ['Cis_Man']
woman = ['Cis_Woman']

# Regex for everything not caught by the defined buckets
regex = '^((?!(^Man$|^Woman$|^Other$)).).+$'

# Removes 'unspecified' since they are unknowable features
# and buckets all others into 'Man', 'Woman', and 'Other'
# for model fitting
genderData = dataset[dataset.gender != 'unspecified']
genderData['gender'] = genderData['gender'].replace(man, 'Man')
genderData['gender'] = genderData['gender'].replace(woman, 'Woman')
genderData['gender'] = genderData['gender'].replace(
    to_replace=regex,
    value='Other',
    regex=True
)

# Set variables to train the genderModel and predict
XGender = tfidf.fit_transform(genderVectorizer.fit_transform(genderData.writing))
yGender = genderData.gender

genderTest = tfidf.transform(genderVectorizer.transform([testString]))

# Train the genderModel and predict the submitted string
from sklearn.naive_bayes import MultinomialNB
genderModel = MultinomialNB().fit(XGender, yGender)
genderPrediction = genderModel.predict(genderTest)

### END GENDER

### ORIENTATION

# Buckets are 'Straight', 'LGBTQ+'

orientationVectorizer = CountVectorizer()

# Regex for everything not caught by the defined buckets
regex = '^((?!(^Straight$)).).+$'

# Removes 'unspecified' since they are unknowable features
# and buckets all others into 'Straight' or 'LGBTQ+'
# for model evaluation
orientationData = dataset[dataset.orientation != 'unspecified']
orientationData['orientation'] = orientationData['orientation'].replace(
    to_replace=regex,
    value='LGBTQ+',
    regex=True
)

# Set variables to train the orientationModel and predict
XOrientation = tfidf.fit_transform(orientationVectorizer.fit_transform(orientationData.writing))
yOrientation = orientationData.orientation

orientationTest = tfidf.transform(orientationVectorizer.transform([testString]))

# Train the orientationModel and predict the submitted string
from sklearn.neighbors import KNeighborsClassifier
orientationModel = KNeighborsClassifier(n_neighbors=25).fit(XOrientation, yOrientation)
orientationPrediction = orientationModel.predict(orientationTest)

### END ORIENTATION

### RACE

# Buckets are 'White', 'PoC'

raceVectorizer = CountVectorizer()

# Regex for everything not caught by the defined buckets
regex = '^((?!(^White$)).).+$'

# Removes 'unspecified' since they are unknowable features
# and buckets all others into 'White' or 'PoC'
# for model evaluation
raceData = dataset[dataset.race != 'unspecified']
raceData['race'] = raceData['race'].replace(
    to_replace=regex,
    value='PoC',
    regex=True
)

 # Set variables to train the raceModel and predict
XRace = tfidf.fit_transform(raceVectorizer.fit_transform(raceData.writing))
yRace = raceData.race

raceTest = tfidf.transform(raceVectorizer.transform([testString]))

# Train the raceModel and predict the submitted string
from sklearn.linear_model import SGDClassifier
raceModel = SGDClassifier(loss='hinge', penalty='l2',
                          alpha=1e-3, n_iter=5,
                          random_state=1).fit(XRace, yRace)
racePrediction = raceModel.predict(raceTest)

### END RACE

# Return the predicted categories of all three models
print(genderPrediction[0]+','+orientationPrediction[0]+','+racePrediction[0])
