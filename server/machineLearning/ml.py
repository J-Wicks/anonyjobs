import numpy as np
import pandas as pd

# Vectorizers to transform data
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer

vectorizer = CountVectorizer()
tfidf = TfidfTransformer()

# Get the dataset from Heroku
url = 'https://serene-forest-99801.herokuapp.com/api/allData'
dataset = pd.read_json(url)

# TODO Get the statement from JavaScript and transform to be used by ML
testString = 'Placeholder text here' # TODO This should be a string from JS
test = tfidf.transform(vectorizer.transform([testString]))

### GENDER

# Buckets are 'Man', 'Woman', 'Other'

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

# Set X and y variabls to train the genderModel
XGender = tfidf.fit_transform(vectorizer.fit_transform(genderData.writing))
yGender = genderData.gender

# Train the genderModel and predict the submitted string
from sklearn.neighbors import KNeighborsClassifier
genderModel = KNeighborsClassifier(n_neighbors=16).fit(XGender, yGender)
genderPrediction = genderModel.predict(test)

### END GENDER

### ORIENTATION

# Buckets are 'Straight', 'LGBTQ+'

# Regex for everything not caught by the defined buckets
regex = '^((?!(^Straight$)).).+$'

# Removes 'unspecified' since they are unknowable features
# and buckets all others into 'Straight' or 'LGBTQ+'
# for model evaluation
orientationData = dataset[dataset.orientation != 'unspecified']
orientationData['orientation'] = orientationData['orientation'].replace(
    to_replace=regex,
    value='Other',
    regex=True
)

# Set X and y variabls to train the orientationModel
XOrientation = tfidf.fit_transform(vectorizer.fit_transform(orientationData.writing))
yOrientation = orientationData.race

# Train the orientationModel and predict the submitted string
from sklearn.naive_bayes import MultinomialNB
orientationModel = MultinomialNB().fit(XOrientation, yOrientation)
orientationPrediction = orientationModel.predict(test)

### END ORIENTATION

### RACE

# Buckets are 'White', 'PoC'

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

# Set X and y variabls to train the raceModel
XRace = tfidf.fit_transform(vectorizer.fit_transform(raceData.writing))
yRace = raceData.race

# Train the raceModel and predict the submitted string
from sklearn.linear_model import SGDClassifier
raceModel = SGDClassifier(loss='hinge', penalty='l2',
                    alpha=1e-3, n_iter=5,
                    random_state=1).fit(XRace, yRace)
racePrediction = raceModel.predict(test)

### END RACE

# TODO Return the predicted categories of all three models
predictions = [genderPrediction,orientationPrediction, racePrediction]
# TODO Return the above to JS as an array
