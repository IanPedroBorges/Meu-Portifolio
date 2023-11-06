import contruction from '../images/in construction.jpg'
import ibge from '../images/projects/test-tecnico.png'
import recipe from '../images/projects/recipes.png'
import trybeWallet from '../images/projects/TrybeWallet.png'

export const ProjectArray = [
    {
        image: ibge,
        title: 'Notices Ibge',
        description: ' Projeto feito na trybe, com o objetivo de consumir uma api do ibge, e mostrar as noticias do dia, um teste tecnico bastante desafiador e divertido',
        github: 'https://github.com/IanPedroBorges/TesteTecnico',
        deploy: 'https://teste-tecnico-ibge-simulator.vercel.app/',
        tech: 'React, Typescript, Style-Modules,Context-Api, React Testing Library'
    },
    {
        image: recipe,
        title: 'Recipes',
        description: ' Projeto feito na trybe em grupo de 6 pessoas e focado no mobile, com o objetivo de consumir uma api de receitas,',
        github: 'https://github.com/IanPedroBorges/Recipes',
        deploy: 'https://recipes-project-tau.vercel.app/',
        tech: 'React, Typescript, Style-Modules,Context-Api, React Testing Library'
    },
    {
        image: trybeWallet,
        title: 'TrybeWallet',
        description: ' O TrybeWallet é um projeto desenvolvido na Trybe que utiliza a tecnologia Redux para criar uma plataforma que permite aos usuários acompanhar o valor das moedas com conversão. Com esta aplicação, você pode monitorar as taxas de câmbio e o valor de diferentes moedas, facilitando o acompanhamento de investimentos e transações financeiras. ',
        github: 'https://github.com/IanPedroBorges/TrybeWallet',
        deploy: 'https://trybe-wallet-blush.vercel.app/',
        tech: 'React, Typescript, Redux, Css, React Testing Library'
    },
    {
        image: contruction,
        title: 'Projeto em Construção',
        description: ' numero 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
        github: '',
        deploy: '',
        tech: 'HTML, CSS , Javascript'
    },
    {
        image: contruction,
        title: 'Projeto em Construção',
        description: ' numero 5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
        github: '',
        deploy: '',
        tech: 'HTML, CSS , Javascript'
    },
    {
        image: contruction,
        title: 'Projeto em Construção',
        description: ' numero 6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
        github: '',
        deploy: '',
        tech: 'HTML, CSS , Javascript'
    }
]