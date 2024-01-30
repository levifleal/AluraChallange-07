//img
import photoCamisa from './assets/desktop/ImagensCards/Camiseta.png'
import photoCalca from './assets/desktop/ImagensCards/Calça.png'
import phototenis from './assets/desktop/ImagensCards/Tenis.png'
import photoJaqueta from './assets/desktop/ImagensCards/Jaqueta.png'
import photoOculos from './assets/desktop/ImagensCards/óculos.png'
import photoBolsa from './assets/desktop/ImagensCards/Bolsa.png'

let produtosDb = [
    {   
        name:'camisaConforto',
        img:photoCamisa,
        title:'Camisa Conforto',
        desc:'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
        price:'R$ 70,00',
        path:'/products/camisaConforto',
        cores:[
            'Marron','Azul','Preto'
        ],
        tamanho:[
            'pp','p','m','g','gg'
        ]
        
    },
    {
        name:'calcaAlfaiataria',
        img:photoCalca ,
        title:'Calça Alfaiataria',
        desc:'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
        price:'R$ 180,00',
        path:'/products/calcaAlfaiataria',
        cores:[
            'Bege','Preto','OffWhite'
        ],
        tamanho:[
            'pp','p','m','g','gg'
        ]
    },
    {
        name:'tenisChuncky',
        img:phototenis ,
        title:'Tênis Chunky',
        desc:'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
        price:'R$ 250,00',
        path:'/products/tenisChuncky',
        cores:[
            'Branco','Preto','Azul',
        ],
        tamanho:[
            '39','40','41','42'
        ]
    },
    {
        name:'jaquetaJeans',
        img:photoJaqueta ,
        title:'Jaqueta Jeans',
        desc:'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
        price:'R$ 150,00',
        path:'/products/jaquetaJeans', 
        cores:[
            'Azul Claro','Preto'
        ],
        tamanho:[
            'pp','p','m','g','gg'
        ]
    },
    {
        name:'oculosRedondo',
        img:photoOculos ,
        title:'Óculos Redondo',
        desc:'Armação metálica em grafite com lentes arredondadas. Sem erro!',
        price:'R$ 120,00',
        path:'/products/oculosRedondo',
        cores:[
            'Preto','Branco','Marron'
        ],
        tamanho:[
            'unico'
        ]
    },
    {
        name:'bolsaCoringa',
        img:photoBolsa ,
        title:'Bolsa Coringa',
        desc:'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
        price:'R$ 120,00',
        path:'/products/bolsaCoringa', cores:[
            'Camel','Preto','OffWhite'
        ],
        tamanho:[
            'unico'
        ]
    }
]

export default produtosDb