import contruction from '../images/in construction.jpg'
import ibge from '../images/projects/test-tecnico.png'
import recipe from '../images/projects/recipes.png'
import trybeWallet from '../images/projects/TrybeWallet.png'
import storeManager from '../images/projects/StoreManager.jpeg'

export const ProjectArray = [
    {
        image: ibge,
        title: 'Notices Ibge',
        description: ' Projeto feito na trybe, com o objetivo de consumir uma api do ibge, e mostrar as noticias do dia, um teste tecnico bastante desafiador e divertido',
        github: 'https://github.com/IanPedroBorges/TesteTecnico',
        deploy: 'https://teste-tecnico-ibge-simulator.vercel.app/',
        tech: 'React, Typescript, Style-Modules,Context-Api, React Testing Library',
        frontend: true,
        backend: false,
        fullstack: false,
        highlights: true
    },
    {
        image: recipe,
        title: 'Recipes',
        description: ' Projeto feito na trybe em grupo de 6 pessoas e focado no mobile, com o objetivo de consumir uma api de receitas,',
        github: 'https://github.com/IanPedroBorges/Recipes',
        deploy: 'https://recipes-project-tau.vercel.app/',
        tech: 'React, Typescript, Style-Modules,Context-Api, React Testing Library',
        frontend: true,
        backend: false,
        fullstack: false,
        highlights: true
    },
    {
        image: trybeWallet,
        title: 'TrybeWallet',
        description: ' O TrybeWallet é um projeto desenvolvido na Trybe que utiliza a tecnologia Redux para criar uma plataforma que permite aos usuários acompanhar o valor das moedas com conversão. ',
        github: 'https://github.com/IanPedroBorges/TrybeWallet',
        deploy: 'https://trybe-wallet-blush.vercel.app/',
        tech: 'React, Typescript, Redux, Css, React Testing Library',
        frontend: true,
        backend: false,
        fullstack: false,
        highlights: false
    },
    {
        image: storeManager,
        title: 'StoreManager',
        description: ' O StoreManager é um projeto de backend desenvolvido na Trybe que se concentra em criar uma aplicação de gerenciamento de loja. Este projeto oferece soluções para melhorar o funcionamento de uma loja, incluindo o acompanhamento de produtos, pedidos, e clientes.',
        github: 'https://github.com/IanPedroBorges/StoreManager',
        deploy: '',
        tech: 'Node, Javascript, Express, Mysql',
        frontend: false,
        backend: true,
        fullstack: false,
        highlights: false
    },
    {
        image: storeManager,
        title: 'BlogsApi',
        description: 'O BlogsApi é um projeto que se concentra em criar uma API para gerenciar blogs e postagens online. Esta API oferece uma plataforma robusta para criar, visualizar, editar e excluir blogs e suas postagens. ',
        github: 'https://github.com/IanPedroBorges/BlogsApi',
        deploy: '',
        tech: 'Node, Javascript, Express, Mysql, Sequelize',
        frontend: false,
        backend: true,
        fullstack: false,
        highlights: false
    },
    {
        image: contruction,
        title: 'Projeto em Construção',
        description: ' numero 6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
        github: '',
        deploy: '',
        tech: '',
        frontend: true,
        backend: true,
        fullstack: true,
        highlights: true
    },
    {
        image: contruction,
        title: 'Projeto em Construção',
        description: ' numero 6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s,',
        github: '',
        deploy: '',
        tech: '',
        frontend: true,
        backend: true,
        fullstack: true,
        highlights: true
    }
]