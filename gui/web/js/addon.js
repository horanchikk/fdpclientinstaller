let {PythonShell} = require('python-shell')
let path = require("path");
const { default: Swal } = require('sweetalert2');

var forge = "forge"
var nonforge = "nonforge"

let options = {
  scriptPath : path.join(__dirname, '/')
}

let optionsnonforge = {
  scriptPath : path.join(__dirname, '/'),
  args: ['nonforge']
}

let optionsforge = {
  scriptPath : path.join(__dirname, '/'),
  args: ['forge']
}

let optionsdmain = {
  scriptPath : path.join(__dirname, '/'),
  args: ['main']
}

let optionsdbeta = {
  scriptPath : path.join(__dirname, '/'),
  args: ['beta']
}

function closer() {
    window.close();
}

function installmain() {
    Swal.fire({
      title: 'Select type of installing:',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Forge',
      denyButtonText: 'NonForge',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Thanks for using our client!',
          timer: 6000,
          timerProgressBar: false,
          allowOutsideClick: () => {return false},
          didOpen: () => {
            console.log("PyShell launched")
            Swal.showValidationMessage("Downloading, please wait...")
            let downloader = new PythonShell('../py/downloader.py', optionsdmain);
            Swal.showLoading();
            timerInterval = setInterval(() => {
              Swal.stopTimer();
              console.log("timer: " + Swal.getTimerLeft())
              downloader.setMaxListeners(1);
              downloader.on('message', function(message) {
                console.log("downloader.py exited with code: 0 ", message)
                Swal.showValidationMessage("Installing, please wait...")
                const installer = new PythonShell('../py/installer.py', optionsforge);
                installer.setMaxListeners(1);
                installer.on('message', function(message) {
                  console.log("../py/installer.py exited with code: 0 ", message);
                  Swal.close();
                  Swal.fire({
                    title: 'Client has been installed!',
                    text: 'Application will be closed.',
                    timer: 4000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    allowOutsideClick: () => {return false},
                  }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                      window.close()
                    }
                  })
                })
              })   
            }, 500)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('1')
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Thanks for using our client!',
          timer: 6000,
          timerProgressBar: false,
          allowOutsideClick: () => {return false},
          didOpen: () => {
            console.log("PyShell launched")
            Swal.showValidationMessage("Downloading, please wait...")
            let downloader = new PythonShell('../py/downloader.py', optionsdmain);
            Swal.showLoading();
            timerInterval = setInterval(() => {
              Swal.stopTimer();
              downloader.setMaxListeners(1);
              downloader.on('message', function(message) {
                console.log("../py/downloader.py exited with code: 0 ", message)
                Swal.showValidationMessage("Installing, please wait...")
                try {
                  PythonShell('../py/installer.py', optionsnonforge);
                } catch (error) {
                  Swal.close();
                  Swal.fire({
                    title: 'Client has been installed!',
                    text: 'Application will be closed.',
                    timer: 4000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    allowOutsideClick: () => {return false},
                  }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                      window.close()
                    }
                  })
                }
                const installer = new PythonShell('../py/installer.py', optionsnonforge);
                installer.setMaxListeners(1);
                installer.on('message', function(message) {
                  console.log("../py/installer.py exited with code: 0 ", message);
                  Swal.close();
                  Swal.fire({
                    title: 'Client has been installed!',
                    text: 'Application will be closed.',
                    timer: 4000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    allowOutsideClick: () => {return false},
                  }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                      window.close()
                    }
                  })
                })
              })   
            }, 500)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('1')
          }
        })
      }
    })
}

function installbeta() {
  Swal.fire({
    title: 'Select type of installing:',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Forge',
    denyButtonText: 'NonForge',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Thanks for using our client!',
        timer: 6000,
        timerProgressBar: false,
        allowOutsideClick: () => {return false},
        didOpen: () => {
          console.log("PyShell launched")
          Swal.showValidationMessage("Downloading, please wait...")
          let downloader = new PythonShell('../py/downloader.py', optionsdbeta);
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.stopTimer();
            console.log("timer: " + Swal.getTimerLeft())
            downloader.setMaxListeners(1);
            downloader.on('message', function(message) {
              console.log("downloader.py exited with code: 0 ", message)
              Swal.showValidationMessage("Installing, please wait...")
              const installer = new PythonShell('../py/installer.py', optionsforge);
              installer.setMaxListeners(1);
              installer.on('message', function(message) {
                console.log("../py/installer.py exited with code: 0 ", message);
                Swal.close();
                Swal.fire({
                  title: 'Client has been installed!',
                  text: 'Application will be closed.',
                  timer: 4000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  allowOutsideClick: () => {return false},
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    window.close()
                  }
                })
              })
            })   
          }, 500)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('1')
        }
      })
    } else if (result.isDenied) {
      Swal.fire({
        title: 'Thanks for using our client!',
        timer: 6000,
        timerProgressBar: false,
        allowOutsideClick: () => {return false},
        didOpen: () => {
          console.log("PyShell launched")
          Swal.showValidationMessage("Downloading, please wait...")
          let downloader = new PythonShell('../py/downloader.py', optionsdbeta);
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.stopTimer();
            downloader.setMaxListeners(1);
            downloader.on('message', function(message) {
              console.log("../py/downloader.py exited with code: 0 ", message)
              Swal.showValidationMessage("Installing, please wait...")
              try {
                PythonShell('../py/installer.py', optionsnonforge);
              } catch (error) {
                Swal.close();
                Swal.fire({
                  title: 'Client has been installed!',
                  text: 'Application will be closed.',
                  timer: 4000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  allowOutsideClick: () => {return false},
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    window.close()
                  }
                })
              }
              const installer = new PythonShell('../py/installer.py', optionsnonforge);
              installer.setMaxListeners(1);
              installer.on('message', function(message) {
                console.log("../py/installer.py exited with code: 0 ", message);
                Swal.close();
                Swal.fire({
                  title: 'Client has been installed!',
                  text: 'Application will be closed.',
                  timer: 4000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  allowOutsideClick: () => {return false},
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                    window.close()
                  }
                })
              })
            })   
          }, 500)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('1')
        }
      })
    }
  })
}

function uninstall() {
  Swal.fire({
    title: 'Sorry to break up with you.',
    timer: 8000,
    timerProgressBar: false,
    allowOutsideClick: () => {return false},
    didOpen: () => {
      console.log("PyShell launched")
      Swal.showValidationMessage("Uninstalling, please wait...")
      Swal.showLoading();
      let downloader = new PythonShell('../py/uninstaller.py', options);
      Swal.stopTimer();
      downloader.setMaxListeners(1);
      try {
        downloader.on('message', function(message) {
          console.log("../py/uninstaller.py exited with code: 0 ", message);
          Swal.close();
          Swal.fire({
            title: 'Client has been uninstalled.',
            text: 'Application will be closed.',
            timer: 4000,
            showConfirmButton: false,
            timerProgressBar: true,
            allowOutsideClick: () => {return false},
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              window.close()
            }
          })
        })
      } catch(error) {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Client isn't installed.",
          text: 'Please install client, using button "Install"',
          showConfirmButton: true,
          allowOutsideClick: () => {return true},
        })
      }
      Swal.resumeTimer();
      timerInterval = setInterval(() => {
      }, 500)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Client isn't installed.",
        text: 'Please install client, using button "Install"',
        showConfirmButton: true,
        allowOutsideClick: () => {return true},
      })
    }
  })
}