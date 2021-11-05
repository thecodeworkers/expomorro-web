const pages = `
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
      title
      subtitle
      footerText
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
    ... on ComponentSeccionesPortfolioOutstanding{
      position
    }
  }
}
`

export default pages
