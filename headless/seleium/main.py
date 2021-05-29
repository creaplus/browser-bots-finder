from selenium import webdriver
import time


driver = webdriver.Chrome()
# driver.add_argument("--headless")
driver.get(url='https://antoinevastel.com/bots/')
time.sleep(3)
width = driver.execute_script("return document.documentElement.scrollWidth")
height = driver.execute_script("return document.documentElement.scrollHeight")
print(width,height)
driver.set_window_size(width, height)

time.sleep(1)
driver.save_screenshot('fingerprint.png')
# driver.quit()