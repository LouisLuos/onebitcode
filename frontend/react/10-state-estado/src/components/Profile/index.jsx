import { useState } from "react"
import LinkButtom from "../LinkButtom"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"



export default function Profile(props) {

  // primeiro parametro é o que eu passar no useState, segundo parametro é o valor que eu vou atualizar do primeiro parâmetro
  // Valor / função modificadora(valor => valorNovo)
  const [followButtom, setFollowButtom] = useState("Seguir")

  function Click () {
    setFollowButtom("Seguindo")
    alert("Você esta me seguindo")
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>{props.name}
        <button
        className={styles.followButtom}
        onClick={Click}
        
        >{followButtom}</button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.phone}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
        className={styles.links}
      >
          <LinkButtom linkDoBotao={props.githubUrl}>GitHub</LinkButtom>
          <LinkButtom linkDoBotao={props.linkedinUrl}>LinkedIn</LinkButtom>
          <LinkButtom linkDoBotao={props.twitterUrl}>Twitter</LinkButtom>
      </ProfileSection>
    </div>
  )
}