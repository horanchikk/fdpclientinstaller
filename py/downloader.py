# Import libs
from shutil import copyfileobj, move
from urllib.request import urlopen
from os.path import isfile
from sys import argv
from requests import get
from json import loads
from zipfile import ZipFile
from os import remove, rename

# Configuration
mod_name = "fdp.jar"
modurl = "http://github.com/UnlegitMC/FDPClient/releases/latest/download/FDPClient-2.0.0.jar"
mode = argv[1]
candownload = 0
tryversion = 0

def download(url, file_name):
    with urlopen(url) as response, open(file_name, 'wb') as out_file:
        copyfileobj(response, out_file)

if mode == "beta":
    request = get("https://api.github.com/repos/UnlegitMC/FDPClient/actions/runs")
    ghjson = loads(request.text)
    id = ghjson['workflow_runs'][0]['id']
    beta_link = "https://nightly.link/UnlegitMC/FDPClient/actions/runs/" + str(id) + "/FDPClient.zip"
    while candownload == 0:
        try:
            id = ghjson['workflow_runs'][tryversion]['id']
            beta_link = "https://nightly.link/UnlegitMC/FDPClient/actions/runs/" + str(id) + "/FDPClient.zip"
            download(beta_link, "fdpbeta.zip")
            candownload = 1
            break
        except:
            pass
        tryversion += 1
    with ZipFile("fdpbeta.zip", "r") as zip:
        for info in zip.infolist(): 
            filefdp = str(info.filename)
        zip.extractall()
        if isfile('fdp.jar'):
            remove('fdp.jar')
        rename(filefdp, "fdp.jar")
        print("unpacked")
    remove("fdpbeta.zip")
elif mode == "main":
    if isfile('../fdp.jar'):
        print('Mod is downloaded, you need not in download')
    else:
        download(modurl, mod_name)
        print("File downloaded")
