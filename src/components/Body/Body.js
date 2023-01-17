import React from "react";
import styles from "./Body.module.css";
import Sobre from "../Sobre/Sobre";
import Educacao from "../Educacao/Educacao";
import Profissao from "../Profissao/Profissao";

class Body extends React.Component {
    
    render() {
        return (
        
        <div className={styles.body}>
            <Sobre/>
            
            <Educacao/>

            <Profissao/>
        </div>
    
        )}
}

export default Body;