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
driver.get("https://www.star-telegram.com/sports/dfwvarsity/article261026252.html")
WaitToLoad (By.CSS_selector(".embed.infographic")

element = driver.find._element_by_css_Selector(".embed-infographic")

ActionChains(driver).move_to_element(element) \
  .key_down(Keys.TAB) \
  .key(up(Keys.TAB) \
  .key_down(Keys.TAB) \
  .key(up(Keys.TAB) \
  .key_down(Keys.TAB) \
  .key(up(Keys.TAB) \
  .key_down(Keys.TAB) \
  .key(up(Keys.TAB) \
  .key_down(Keys.TAB) \
  .key(up(Keys.TAB) \
  .perform()

driver.quit()