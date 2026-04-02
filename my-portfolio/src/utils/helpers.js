export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const throttle = (fn, limit = 300) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const scrollToSection = id => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

export const formatDate = date => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date))
}

export const copyToClipboard = async text => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text)
    return true
  }
  return false
}

export const generateId = (prefix = "id") => {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`
}

export const getScrollPercentage = () => {
  const scrollTop = window.scrollY
  const docHeight = document.body.scrollHeight - window.innerHeight
  return Math.round((scrollTop / docHeight) * 100)
}

export const isInViewport = element => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  )
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}