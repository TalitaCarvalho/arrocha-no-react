import perfil from '../../assets/perfil.jpeg'
import './index.css'

const Sobre = () => {
    return (
        <div className="sobre">
            <img className="image" src={perfil} alt='Imagem Talita' />
            <div className="bio">
                <h1>Talita de Almeida Carvalho</h1>
                <p>Sou desenvolvedora Front-end formanda pela Reprograma, atualmente estou no 7° período de Pedagogia, participo também do bootcamp Hiring Coders VTEX, da Gama Academy. Gosto de contribuir com o coletivo e adoro pensar fora da caixa, usando da criatividade para realizar tarefas, adoro desafios e me sinto mais eficiente quando estou em múltiplas atividades.</p>
            </div>
        </div>
    )
}
export default Sobre