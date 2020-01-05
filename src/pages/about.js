import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Center = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const About = () => {
  return (
    <Layout>
      <SEO title="À propos" description="Présentation de l'auteur du site" />
      <h2>À propos de moi</h2>
      <p>
        Hello, moi c'est Julien, alias Database01. J'aime l'informatique en
        général, les jeux-vidéo, et la culture pop de manière générale. Je suis
        également le sbire d'un
        <a href="https://www.instagram.com/jarvisthecat01/">
          pôticha beaucoup trop mignon qui s'appelle Jarvis 🐈
        </a>
        .
      </p>
      <Center>
        <div>
          <img
            src="https://i.imgur.com/z1PHF7y.jpg"
            width="400"
            style={{ margin: "auto" }}
          />
          <p style={{textAlign:"center"}}><i>Regardez comment je suis mignon</i> <span role="img">😍</span></p>
        </div>
      </Center>
      <p>
        Côté pro je suis développeur web depuis 4 ans sur la{" "}
        <a href="https://www.wikiwand.com/en/MEAN_(software_bundle)">
          stack MEAN
        </a>
        , mais je regarde un peu ce qu'il se fait à côté. <br />
        <br />
        Je me suis décidé à essayer d'écrire au moins une fois par semaine pour
        2020. Au niveau des sujets je ne compte pas me limiter : s'il y a un
        truc qui me plait ou que j'ai trouvé cool, j'en ferai un petit post <span role="img">😄</span>.
      </p>
      <h2>À propos du site</h2>
      <p>
        J'en profite d'avoir un petit projet à côté du boulot pour expérimenter.
        J'ai décidé de partir sur <a href="https://www.gatsbyjs.org/">Gatsby</a>
        , donc sur du React alors que je n'en ai jamais fait <span role="img">😅</span>. On verra bien
        ce que ça donnera mais pour le moment je trouve ça assez cool ! Le site
        continuera d'évoluer au fil des semaines avec pour commencer l'arriver
        d'un système de tag/catégorie.
      </p>
    </Layout>
  )
}

export default About
