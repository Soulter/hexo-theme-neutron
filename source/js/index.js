
window.onload = () => {
  let media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
  let isDark = () => {
    const setting = localStorage.getItem('hexo-color-scheme') || 'auto'
    if (setting === 'dark' || (media.matches && setting !== 'light')) {
      return true
    } else{
      return false
    }
  }
  // 切换为深色模式
  let toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', true)
    document.getElementById('moon-icon').style.display = 'block'
    document.getElementById('sun-icon').style.display = 'none'
    setDarkMode('dark')
  }
  // 切换为浅色模式
  let toggleLightMode = () => {
    document.documentElement.classList.toggle('dark', false)
    document.getElementById('moon-icon').style.display = 'none'
    document.getElementById('sun-icon').style.display = 'block'
    setDarkMode('light')
  }
  let setDarkMode = (scheme) => {
    const darkMode = media.matches ? 'dark' : 'light'
    if (darkMode !== scheme) {
      localStorage.setItem('hexo-color-scheme', scheme)
    } else{
      localStorage.setItem('hexo-color-scheme', 'auto')
    }
  }
  // 切换为自动模式
  let updateMode = (e) => {
    const setting = localStorage.getItem('hexo-color-scheme') || 'auto'
    console.log(setting, e.matches)
    if (setting === 'auto') {
      if (e.matches) {
        toggleDarkMode()
      } else {
        toggleLightMode()
      }
    }
  }

  // let media = getMedia()
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', updateMode)
  } else if (typeof media.addListener === 'function') {
    media.addListener(updateMode)
  }

  if (isDark()) {
    document.getElementById('moon-icon').style.display = 'block'
  } else {
    document.getElementById('sun-icon').style.display = 'block'
  }

  document.getElementById('moon-icon').addEventListener('click', () => {
    toggleLightMode()
  })
  document.getElementById('sun-icon').addEventListener('click', () => {
    toggleDarkMode()
  })
}

