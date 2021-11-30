const portfolio = `
portfolios {
  uri
  name
  outstanding
  description
  principalImage {
    ext
    url
    name
    height
    width
  }
  events
  content {
    __typename
    ... on ComponentTextosText {
      text
      position
    }
    ... on ComponentBannersBanner {
      image {
        ext
        url
        name
      }
      imageResponsive {
        ext
        url
        name
      }
      position
      fullWidth
    }
    ... on ComponentSlidersSlider {
      Slide {
        ext
        url
        name
      }
      position
    }
    ... on ComponentSeccionesColumTexts {
      title
      visible
      position
      description1
      description2
    }
    ... on ComponentSeccionesImagePreview {
      title
      image {
        ext
        url
        name
      }
      visible
      position
      responsive {
        ext
        url
        name
      }
    }
    ... on ComponentSlidersEventGalery{
      position
      galery {
        ext
        url
        name
      }
      responsiveImage {
        ext
        url
        name
      }
      leftArrow {
        ext
        url
        name
      }
      rightArrow {
        ext
        url
        name
      }
    }
  }
}
`

export default portfolio