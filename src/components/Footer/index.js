import "./style.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <p>Talita Carvalho</p>
                <p>Desenvolvedora fron-end recém formada</p>
            </div>

            <div className="social-icons">
                <div>
                    <a target="blank" href="https://www.linkedin.com/in/talita-almeida-carvalho-23735314a/">
                        <span class="mdi mdi-linkedin"></span>
                    </a>
                </div>
                <div>
                    <a target="blank" href="https://www.instagram.com/talita_almeida_carvalho/">
                        <span class="mdi mdi-instagram"></span>
                    </a>
                </div>
                <div>
                    <a target="blank" href="https://github.com/TalitaCarvalho?tab=repositories">
                        <span class="mdi mdi-github"></span>
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer