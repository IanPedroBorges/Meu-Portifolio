import contruction from '../images/in construction.jpg'
import ibge from '../images/projects/test-tecnico.png'
import recipe from '../images/projects/recipes.png'
import trybeWallet from '../images/projects/TrybeWallet.png'
import storeManager from '../images/projects/StoreManager.jpeg'
import restaurantFood from '../images/projects/restaurant-food.png'
import trybeHotel from '../images/projects/trybe-hotel.svg'
import luifit from '../images/projects/luifit.svg'

export const ProjectArray = [
    {
        id: 1,
        name: 'RestaurantFood',
        description: 'Site inspirado no iFood para delivery de comida. Plataforma completa com sistema de pedidos, catálogo de restaurantes e interface moderna.',
        html_url: 'https://github.com/IanPedroBorges/RestaurantFood',
        homepage: 'https://restaurant-food-rho.vercel.app/',
        language: 'Next.js',
        image: restaurantFood,
        category: 'professional',
        // Legacy properties for backward compatibility
        title: 'RestaurantFood',
        github: 'https://github.com/IanPedroBorges/RestaurantFood',
        deploy: 'https://restaurant-food-rho.vercel.app/',
        tech: 'Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL, NextAuth, Vercel, React Hook Form, Zod, Stripe API, JWT, bcrypt',
        frontend: false,
        backend: false,
        fullstack: true,
        highlights: true
    },
    {
        id: 2,
        name: 'Notices Ibge',
        description: 'Projeto feito na trybe, com o objetivo de consumir uma api do ibge, e mostrar as noticias do dia, um teste tecnico bastante desafiador e divertido',
        html_url: 'https://github.com/IanPedroBorges/TesteTecnico',
        homepage: 'https://teste-tecnico-ibge-simulator.vercel.app/',
        language: 'TypeScript',
        image: ibge,
        category: 'frontend',
        tech: 'React, Typescript, Style-Modules, Context-Api, React Testing Library',
    },
    {
        id: 3,
        name: 'Recipes',
        description: 'Projeto feito na trybe em grupo de 6 pessoas e focado no mobile, com o objetivo de consumir uma api de receitas',
        html_url: 'https://github.com/IanPedroBorges/Recipes',
        homepage: 'https://recipes-project-tau.vercel.app/',
        language: 'TypeScript',
        image: recipe,
        category: 'frontend',
        tech: 'React, Typescript, Style-Modules, Context-Api, React Testing Library',
    },
    {
        id: 4,
        name: 'TrybeWallet',
        description: 'O TrybeWallet é um projeto desenvolvido na Trybe que utiliza a tecnologia Redux para criar uma plataforma que permite aos usuários acompanhar o valor das moedas com conversão',
        html_url: 'https://github.com/IanPedroBorges/TrybeWallet',
        homepage: 'https://trybe-wallet-blush.vercel.app/',
        language: 'TypeScript',
        image: trybeWallet,
        category: 'frontend',
        tech: 'React, Typescript, Redux, Css, React Testing Library',
    },
    {
        id: 5,
        name: 'StoreManager',
        description: 'O StoreManager é um projeto de backend desenvolvido na Trybe que se concentra em criar uma aplicação de gerenciamento de loja. Este projeto oferece soluções para melhorar o funcionamento de uma loja, incluindo o acompanhamento de produtos, pedidos, e clientes',
        html_url: 'https://github.com/IanPedroBorges/StoreManager',
        homepage: '',
        language: 'JavaScript',
        image: storeManager,
        category: 'backend',
        tech: 'Node, Javascript, Express, Mysql',
    },
    {
        id: 6,
        name: 'Trybe-Hotel',
        description: 'API completa de sistema de hotéis desenvolvida em C# com ASP.NET. Inclui autenticação, gerenciamento de reservas, quartos, hotéis e integração com serviços de geolocalização.',
        html_url: 'https://github.com/IanPedroBorges/Trybe-Hotel',
        homepage: 'https://github.com/IanPedroBorges/Trybe-Hotel#readme',
        language: 'C#',
        image: trybeHotel,
        category: 'study',
        // Legacy properties for backward compatibility
        title: 'Trybe-Hotel',
        github: 'https://github.com/IanPedroBorges/Trybe-Hotel',
        deploy: 'https://github.com/IanPedroBorges/Trybe-Hotel#readme',
        tech: 'C#, ASP.NET Core, MySQL, JWT, Entity Framework, AutoMapper, FluentValidation, Swagger, Docker, Azure',
        frontend: false,
        backend: true,
        fullstack: false,
        highlights: true
    },
    {
        id: 7,
        name: 'LuiFit',
        description: 'E-commerce completo de roupas fitness com sistema de pagamento, carrinho de compras, catálogo de produtos e painel administrativo.',
        html_url: 'https://github.com/IanPedroBorges/LuiFit',
        homepage: 'http://www.luifit.com.br',
        language: 'React',
        image: luifit,
        category: 'professional',
        // Legacy properties for backward compatibility
        title: 'LuiFit',
        github: 'https://github.com/IanPedroBorges/LuiFit',
        deploy: 'http://www.luifit.com.br',
        tech: 'React, Node.js, Express.js, MongoDB, Stripe API, JWT, bcrypt, Material-UI, Mongoose, AWS S3, PayPal API',
        frontend: false,
        backend: false,
        fullstack: true,
        highlights: true
    },
    {
        id: 6,
        name: 'BlogsApi',
        description: 'O BlogsApi é um projeto que se concentra em criar uma API para gerenciar blogs e postagens online. Esta API oferece uma plataforma robusta para criar, visualizar, editar e excluir blogs e suas postagens',
        html_url: 'https://github.com/IanPedroBorges/BlogsApi',
        homepage: '',
        language: 'JavaScript',
        image: storeManager,
        category: 'backend',
        tech: 'Node, Javascript, Express, Mysql, Sequelize',
    },
    {
        id: 9,
        name: 'Projeto em Construção',
        description: 'Projeto em desenvolvimento com tecnologias modernas. Em breve mais detalhes sobre esta aplicação inovadora.',
        html_url: '',
        homepage: '',
        language: 'JavaScript',
        image: contruction,
        category: 'personal',
        // Legacy properties for backward compatibility
        title: 'Projeto em Construção',
        github: '',
        deploy: '',
        tech: 'Em desenvolvimento',
        frontend: true,
        backend: true,
        fullstack: true,
        highlights: false
    },
    {
        id: 10,
        name: 'Projeto Futuro',
        description: 'Mais um projeto em planejamento que promete trazer soluções inovadoras para o mercado de tecnologia.',
        html_url: '',
        homepage: '',
        language: 'TypeScript',
        image: contruction,
        category: 'personal',
        // Legacy properties for backward compatibility
        title: 'Projeto Futuro',
        github: '',
        deploy: '',
        tech: 'Em planejamento',
        frontend: true,
        backend: true,
        fullstack: true,
        highlights: false
    }
]