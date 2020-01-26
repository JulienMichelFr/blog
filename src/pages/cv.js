import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react"
import SkillPill from "../components/skill-pill"
import styled from "styled-components"

const Title2 = styled.h2`
  margin-bottom: 15px;
`
const Title3 = styled.h3`
  margin-bottom: 10px;
`

const PillContainer = styled.div`
margin-bottom: 10px;
`

const Section = styled.section`
  margin-bottom: 10px;
`


const Cv = () => {
  return (
    <Layout>
      <SEO title="CV" description="Mon CV" />
      <Section>
        <Title2>Formation</Title2>
        <ul>
          <li>
            DUT Informatique (Université de Lorraine - Nancy Charlemage)
            2012-2014
          </li>
          <li>
            Licence Professionnelle CISIIE (Université de Lorraine - Nancy
            Charlemage) 2014-2015
          </li>
        </ul>
      </Section>
      <Section>
        <Title2>Compétences</Title2>
        <Title3>Frontend</Title3>
        <PillContainer>
          <SkillPill tooltip="Test" level="full">
            AngularJS
          </SkillPill>
          <SkillPill level="full">Angular (2+)</SkillPill>
          <SkillPill level="is-ok">RxJS</SkillPill>
          <SkillPill level="is-ok">Gestion de store (NgRx)</SkillPill>
          <SkillPill level="is-ok">PWA</SkillPill>
          <SkillPill level="known">React</SkillPill>
          <SkillPill level="known">Web Components</SkillPill>
        </PillContainer>
        <Title3>Applications hybrides</Title3>
        <PillContainer>
          <SkillPill level="is-ok">Ionic</SkillPill>
          <SkillPill level="is-ok">Cordova</SkillPill>
          <SkillPill level="known">Flutter</SkillPill>
        </PillContainer>
        <Title3>Backend</Title3>
        <PillContainer>
          <SkillPill level="full">Api REST</SkillPill>
          <SkillPill level="full">ExpressJS</SkillPill>
          <SkillPill level="full">MongoDB</SkillPill>
          <SkillPill level="is-ok">Api GraphQL</SkillPill>
          <SkillPill level="is-ok">Redis</SkillPill>
          <SkillPill level="is-ok">NestJS</SkillPill>
          <SkillPill
            level="known"
            tooltip="Appris lors de mes formations, pas pratiqué depuis"
          >
            SQL
          </SkillPill>
        </PillContainer>
        <Title3>Outils</Title3>
        <PillContainer>
          <SkillPill level="full">Trello</SkillPill>
          <SkillPill level="full">Slack</SkillPill>
          <SkillPill level="full">Webstorm</SkillPill>
          <SkillPill level="full">Gulp</SkillPill>
          <SkillPill level="full">Webpack</SkillPill>
          <SkillPill level="is-ok">Docker</SkillPill>
          <SkillPill level="is-ok">GitlabCI</SkillPill>
          <SkillPill level="is-ok">ESLint</SkillPill>
          <SkillPill level="is-ok">Storybook</SkillPill>
          <SkillPill level="is-ok">Jest</SkillPill>
          <SkillPill level="is-ok">Jasmine</SkillPill>
          <SkillPill level="known">Kubernetes</SkillPill>
        </PillContainer>
      </Section>
      <Section>
        <Title2>Expériences</Title2>
        <div>
          <h3>
            Stage DUT Informatique - Arcelor-Mittal (Avril 2014 - Juin 2014)
          </h3>
          <p>
            Développement d'une application de gestion de sauvegarde en
            intranet. ( PHP, MySQL, HTML, CSS, JS)
          </p>
        </div>
        <div>
          <h3>Stage LP CISIEE - PlugMyStore.com (Avril 2015 - Juin 2015)</h3>
          <p>
            Amélioration de la plateforme (PHP avec ZF 2 et Doctrine, MySQL,
            JQuery)
          </p>
        </div>
        <div>
          <h3>
            Développeur Fullstack / Responsable technique - 90Tech (depuis
            Janvier 2016)
          </h3>
          <p>
            Amélioration et maintenance de différente applications sur une
            infrastructure microservices (stack MEAN(AngularJS/Angular), NestJS,
            Redis)
          </p>
        </div>
      </Section>
    </Layout>
  )
}

export default Cv
