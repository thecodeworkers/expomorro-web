const home = `
pages {
  id
  name
  uri
  content {
    __typename
    ... on ComponentBannersBanner {
      image {
        url
        ext
        name
      }
      imageResponsive {
        url
        ext
        name
      }
      position
      fullWidth
    }
    ... on ComponentBotoneriaBoton {
      text
      position
      Link
    }
    ... on ComponentSeccionesBotonTexto {
      position
      buttom {
        text
        Link
      }
      title
      body
    }
    ... on ComponentFormulariosFormWithList {
      position
      form {
        name
        Datos {
          __typename
          ... on ComponentFormElementsInput {
            name
            position
            placeholder
            Type
          }
          ... on ComponentFormElementsSelect {
            name
            position
            placeholder
            values
          }
        }
      }
      points {
        title
        position
        direction
        title
        description
        icon {
          url
          ext
          name
        }
      }
    }

    ... on ComponentSlidersSlider {
      position
      Slide {
        url
        ext
        name
      }
    }
    ... on ComponentTextosText {
      position
      text
    }
  }
}
`

export default home
