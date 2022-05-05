#!/usr/bin/env python3

from time import sleep
from selenium importwebdriver
from selenium.webdriver.chrome.options import options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.common.expections import TimeoutException
from selenium.webdriver.common.by import By 
from selenium.webdriver,common.action_chains import ActionChains 
from selenium.webdriver.common.keys importKeys 

def WaitToLoad (byItem, itemName):
    try:
        w=WebDriverWait (driver, 10)
        w.until(expected_conditions,presence_of_element_located((byItem, itemName))) except TimeoutExepection:
        print ("Timeout happened no page load")
options = Options ()
#options.add_argument("--headless")
