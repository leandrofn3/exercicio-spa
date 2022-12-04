import React from "react"
import Banner from "../../components/banner"
import { WrapperIcons, DivIcons, Icon, TextDescription, TitleIcon } from "../../components/SectionIcons";
import { HiComputerDesktop } from 'react-icons/hi2';
import { FaHive } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { SectionCorpo, DivCorpo, TitleCorpo, TextCorpo, ImgCorpo, ImgCorpo3, ImgCorpo2 } from "../../components/sectionCorpo";


function Home() {
    return (
        <React.Fragment>
            <Banner Size={50}>
                <h2>Minha primeira página com React</h2>
            </Banner>

            <WrapperIcons>
                <DivIcons>
                    <Icon> <HiComputerDesktop /> </Icon>
                    <TitleIcon>Somente para Desktop</TitleIcon>
                    <TextDescription>Vamos aprender como utilizar um framework.</TextDescription>
                </DivIcons>

                <DivIcons>
                    <Icon> <FaHive /> </Icon>
                    <TitleIcon>Criando com componentes</TitleIcon>
                    <TextDescription>Utilizamos o Styled components.</TextDescription>
                </DivIcons>

                <DivIcons>
                    <Icon> <BiCheckCircle /> </Icon>
                    <TitleIcon>Facíl aproveitamento</TitleIcon>
                    <TextDescription>Estamos no caminho.</TextDescription>
                </DivIcons>
            </WrapperIcons>

            <SectionCorpo>
                <DivCorpo>
                    <TitleCorpo>Lorem</TitleCorpo>
                    <TextCorpo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laboriosam eius dolor fuga impedit fugiat sit corporis aliquid laudantium quod sapiente placeat ratione, nam reiciendis iusto molestias recusandae dolore maxime?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt sint consectetur eum. Consequuntur aut officiis, explicabo magni dolor corporis, expedita ex, cupiditate nemo minima sed voluptatibus eos nesciunt nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas commodi, nesciunt sed voluptate quam. Rem repellat sint possimus, quasi, ex vitae earum repellendus vero, incidunt velit eos quisquam odit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium facere, aliquam vitae iste officiis explicabo! Cupiditate aliquid debitis iure beatae corrupti, minima est! Natus veniam voluptate sunt ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae laboriosam fugiat adipisci labore perspiciatis illo laborum, dolorum nulla maiores tempora sint non ab optio officia a nemo harum ratione?
                    </TextCorpo>
                </DivCorpo>
                <ImgCorpo />
            </SectionCorpo>

            <SectionCorpo>
            <ImgCorpo2 />
                <DivCorpo>
                    <TitleCorpo>Lorem</TitleCorpo>
                    <TextCorpo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laboriosam eius dolor fuga impedit fugiat sit corporis aliquid laudantium quod sapiente placeat ratione, nam reiciendis iusto molestias recusandae dolore maxime?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt sint consectetur eum. Consequuntur aut officiis, explicabo magni dolor corporis, expedita ex, cupiditate nemo minima sed voluptatibus eos nesciunt nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas commodi, nesciunt sed voluptate quam. Rem repellat sint possimus, quasi, ex vitae earum repellendus vero, incidunt velit eos quisquam odit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium facere, aliquam vitae iste officiis explicabo! Cupiditate aliquid debitis iure beatae corrupti, minima est! Natus veniam voluptate sunt ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae laboriosam fugiat adipisci labore perspiciatis illo laborum, dolorum nulla maiores tempora sint non ab optio officia a nemo harum ratione?
                    </TextCorpo>
                </DivCorpo>
            </SectionCorpo>

            <SectionCorpo>
                <DivCorpo>
                    <TitleCorpo>Lorem</TitleCorpo>
                    <TextCorpo>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laboriosam eius dolor fuga impedit fugiat sit corporis aliquid laudantium quod sapiente placeat ratione, nam reiciendis iusto molestias recusandae dolore maxime?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt sint consectetur eum. Consequuntur aut officiis, explicabo magni dolor corporis, expedita ex, cupiditate nemo minima sed voluptatibus eos nesciunt nam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptas commodi, nesciunt sed voluptate quam. Rem repellat sint possimus, quasi, ex vitae earum repellendus vero, incidunt velit eos quisquam odit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium facere, aliquam vitae iste officiis explicabo! Cupiditate aliquid debitis iure beatae corrupti, minima est! Natus veniam voluptate sunt ratione velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae laboriosam fugiat adipisci labore perspiciatis illo laborum, dolorum nulla maiores tempora sint non ab optio officia a nemo harum ratione?
                    </TextCorpo>
                </DivCorpo>
                <ImgCorpo3 />
            </SectionCorpo>
            <Banner Size={40}>
                <h2>Contato</h2>
            </Banner>
        </React.Fragment>
    )
}

export default Home;