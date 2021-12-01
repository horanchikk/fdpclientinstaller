import sys, time
import urllib.request
import shutil

time.sleep(3)

mod_name = "fdp.jar"
modurl = "http://github.com/UnlegitMC/FDPClient/releases/latest/download/FDPClient-2.0.0.jar"

def download(url, file_name):
    with urllib.request.urlopen(url) as response, open(file_name, 'wb') as out_file:
        shutil.copyfileobj(response, out_file)

download(modurl, mod_name)
print("File downloaded")