import React from "react";
import Capa from "../assets/img/capa.png"
import Perfil from "../assets/img/perfil.png"
import "../assets/style-edit-perfil.css";
import Close from "../assets/img/close.png"

function EditarPerfilPJ({ onClose }) {

    return(
        <section className="perfil-fundo">
            <section className="perfil-modal">
                <section className="perfil-header-modal">
                    <h1>Editar Perfil</h1>
                    <img width="18px" src={Close} alt="" onClick={onClose}/>
                </section>
                <section className="perfil-main-modal">
                    <figure>
                        <img id="capa" src={Capa} alt="capa" />
                    </figure>
                    <section className="perfil-container-modal">
                        <img id="perfil" src={Perfil} alt="perfil" />    
                        <fieldset>
                            <h2>Informações da conta</h2>
                            <section className="perfil-container-info">
                                <section className="box1-modal">
                                    <label for="">Nome completo <span>*</span></label>
                                    <input type="text" name="" id="" placeholder="Company Name"/>
                                    <label for="">Email <span>*</span></label>
                                    <input type="email" name="" id="" placeholder="company@gmail.com"/>
                                    <label for="">Número <span>*</span></label>
                                    <input type="number" name="" id="" placeholder="ex:(00)0 00000-0000"/>
                                    <h3>Endereço <span>*</span></h3>
                                    <section className="endereco">
                                        <section className="endereco-box1">
                                            <div className="endereco-div1">
                                                <label for="">CEP</label>
                                                <input type="number" placeholder="50100-170"/>
                                            </div>
                                            <div className="endereco-div2">
                                                <label for="">Estado</label>
                                                <select name="" id="">
                                                    <option value="">Pernambuco</option>
                                                </select>
                                            </div>
                                        </section>
                                        <section className="endereco-box2">
                                            <div>
                                                <label for="">Cidade</label>
                                                <select name="" id="">
                                                    <option value="">Recife</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="">Rua</label>
                                                <input type="text" placeholder="R. do Pombal"/>
                                            </div>
                                        </section>
                                    </section>
                                </section>
                            </section>
                            <h2>Configurações de senha</h2>
                            <section className="container-senha">
                                <section className="box1-senha">
                                    <label for="">Confirmar senha atual <span>*</span></label>
                                    <input type="password" name="" id="" placeholder="********"/>
                                    <p><a href="">Esqueceu a senha? Receba no email</a></p>
                                </section>
                                <section className="box2-senha">
                                    <label for="">Nova senha</label>
                                    <input type="password" name="" id="" placeholder=""/>
                                    <label for="">Confirmar nova senha</label>
                                    <input type="password" name="" id="" placeholder=""/>
                                    <button>Salvar</button>
                                </section>
                            </section>
                            <section className="modal-cursos">
                                <h2>Cursos e aperfeiçoamentos</h2>
                                <label for="">Instituição de ensino</label>
                                <input type="text" name="" id="" placeholder="Ex: Faculdade Senac Pernambuco"/>
                                <label for="">Curso</label>
                                <input type="text" name="" id="" placeholder="Ex: Ciência da Computação"/>
                                <label htmlFor="">Diploma</label>
                                <input type="text" name="" id="" placeholder="Ex: Bacharelado" />
                                <label htmlFor="">Data de início</label>
                                <input type="date" name="" id="" />
                                <label htmlFor="">Data de término</label>
                                <input type="date" name="" id="" />
                                <button>Adicionar</button>
                            </section>
                        </fieldset>
                    </section>
                </section> 
            </section>
        </section>
    )
}
export default EditarPerfilPJ;