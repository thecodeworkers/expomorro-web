const home = `
  pages {
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
      ... on ComponentFormulariosContacto{
        Posicion
        formulario{
          Input{
            Posicion
            Nombre
            Placeholder
            Type
          }
        }
        Datos{
          Posicion
          Icon{
            url
          }
          Titulo
          informacion
        }
        Titulo
        Subtitulo
        TextoPie
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
