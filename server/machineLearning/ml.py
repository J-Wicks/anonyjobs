import numpy as np
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
import pandas as pd
import urllib.request

# statement = <what was sent in the route>
# transform the input with Pandas

# Import data here
# urllib 
# gender = 
# race = 
# orientation = 

X = gender.data
y = gender.target

multiNB = MultinomialNB().fit(X, y) # This model may change depending on testing

y_pred = multiNB.predict_proba(statement)

# loop here for massive damage >-('')-<

# reconcile targets with target_names

# return the probas for all three parameters
