export const isRetina = () => {
  const query = '(-webkit-min-device-pixel-ratio: 2), n\
    (min--moz-device-pixel-ratio: 2), n\
    (-o-min-device-pixel-ratio: 2/1), n\
    (min-device-pixel-ratio: 2), n\
    (min-resolution: 192dpi), n\
    (min-resolution: 2dppx)';

  return !!window?.matchMedia(query).matches
}

export const determinateTextColor = rgb => {
  if (!rgb) rgb = [255, 0, 0]

  const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000)

  const textColour = (brightness > 125) ? '#262833' : 'white'

  return textColour
}

export const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}
