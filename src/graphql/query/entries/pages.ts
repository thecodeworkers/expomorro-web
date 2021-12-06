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
      type
      position
      fullWidth
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
    ... on ComponentSeccionesServices {
      service {
        service {
          icon {
            url
            name
            ext
          }
          title
          description
        }
        where
      }
      position
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
    ... on ComponentSeccionesDescriptionWithList {
      position
      description
      title
      point { 
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
    ... on ComponentSeccionesImageWithIconList {
      position
      title
      outstanding {
        url
        ext
        name
      }
      responsive {
        url
        ext
        name
      }
      values {
        title
        description
        icon {
          url
          ext
          name
        }
      }
    }
    ... on ComponentSeccionesTitleWithButton {
      position
      Button {
        text
        Link
      }
      Title
      description
    }
    ... on ComponentSeccionesEventList{
      position
      fullList
    }
  }
}
`

export default pages
