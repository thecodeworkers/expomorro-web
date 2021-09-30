const home = `

  pages{
    id
    Nombre
    URI
    Contenido{
      __typename

      ... on ComponentBannersBanner{
        Imagen{
          url
        }
        Posicion
      }
      ... on ComponentBotoneriaBoton{
        Texto,
        Link
        Posicion
      }
      ... on ComponentSeccionesBotonTexto{
        Posicion
        Boton{
          Texto,
          Link
        }
        Titulo,
        Cuerpo
      }
      ... on ComponentBannersBannerMarca{
        Posicion
        Marca{
          Imagen{
            url
          }
        }
      }
      ... on ComponentBannersSponsorBanner{
        Posicion
      	logos{
          url
        }
      }
      ... on ComponentTextosPromotionalText{
        Posicion
        texto
      }
    }
  }
`

export default home
