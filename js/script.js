// barra lateral
const menuItems = document.querySelectorAll('.menu-item')

// mensagens
const msgsNotificacao = document.querySelector('#mensagens-notificacoes')
const msgs = document.querySelector('.mensagens')
const msg = msgs.querySelectorAll('.mensagem')
const msgPesquisa = document.querySelector('#mensagens-pesquisa')

// tema
const tema = document.querySelector('#tema')
const temaModal = document.querySelector('.customizar-tema')
const tamanhoFonte = document.querySelectorAll('.escolher-fonte span')
var root = document.querySelector(':root')
const cores = document.querySelectorAll('.escolher-cor span')
const bg1 = document.querySelector('.tema1')
const bg2 = document.querySelector('.tema2')
const bg3 = document.querySelector('.tema3')

// remover classe ativa de todos os itens do menu
const mudarItemAtivo = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

// mostrar ou ocultar números de notificações
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mudarItemAtivo()
        item.classList.add('active')
        if (item.id != 'notificacoes') {
            document.querySelector('.notificacao-popup').
            style.display = 'none'

        } else {
            document.querySelector('.notificacao-popup').
            style.display = 'block'
            document.querySelector('#notificacoes .contagem-notificacoes').
            style.display = 'none'
        }
    })
})

// buscar conversas
// está com erro no toLowerCase
// const buscarConversas = () => {
//     const val = msgPesquisa.value.toLowerCase()
//     msg.forEach(chat => {
//         let nome = chat.querySelectorAll('h5').textContent.toLowerCase()
//         if (nome.indexOf(val) != -1) {
//             chat.style.display = 'flex'

//         } else {
//             chat.style.display = 'none'
//         }
//     })
// }

// busca por mensagem
//msgPesquisa.addEventListener('keyup', buscarConversas)

// associação com os números de notificações para destacar 
msgsNotificacao.addEventListener('click', () => {
    msgs.style.boxShadow = '0 0 1rem var(--cor-primaria)'
    msgsNotificacao.querySelector('.contagem-notificacoes').style.display = 'none'
    // luz de fundo para destaque
    setTimeout(() => {
        msgs.style.boxShadow = 'none'
    }, 2000)
})

// temas
const abrirTema = () => {
    temaModal.style.display = 'grid'
}

const fecharTema = (e) => {
    if (e.target.classList.contains('customizar-tema')) {
        temaModal.style.display = 'none'
    }
}

// abrir ou fechar customização dos temas
tema.addEventListener('click', abrirTema)

temaModal.addEventListener('click', fecharTema)

// fontes
// seletor do tamanho de fonte atual
const seletorFonte = () => {
    tamanhoFonte.forEach(tamanho => {
        // remover seletor da fonte
        tamanho.classList.remove('active')
    })
}

tamanhoFonte.forEach(tamanho => {
    tamanho.addEventListener('click', () => {
        seletorFonte()
        let tamanhoFonte
        tamanho.classList.toggle('active')

        if (tamanho.classList.contains('fonte-1')) {
            tamanhoFonte = '10px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
    
        } else if (tamanho.classList.contains('fonte-2')) {
            tamanhoFonte = '14px'
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
    
        } else if (tamanho.classList.contains('fonte-3')) {
            tamanhoFonte = '18px'
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
    
        } else if (tamanho.classList.contains('fonte-4')) {
            tamanhoFonte = '22px'
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
    
        } else if (tamanho.classList.contains('fonte-5')) {
            tamanhoFonte = '26px'
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }

        document.querySelector('html').style.fontSize = tamanhoFonte
    })
})

// escolha das cores dos componentes
// seletor da cor atual
const seletorCor = () => {
    cores.forEach(seletor => {
        // remover classe atual
        seletor.classList.remove('active')
    })
}

// escolha das cores
cores.forEach(cor => {
    cor.addEventListener('click', () => {
        let primaria;
        seletorCor()

        if (cor.classList.contains('cor-1')) {
            primaryHue = 25

        } else if (cor.classList.contains('cor-2')) {
            primaryHue = 252

        } else if (cor.classList.contains('cor-3')) {
            primaryHue = 352

        } else if (cor.classList.contains('cor-4')) {
            primaryHue = 152

        } else if (cor.classList.contains('cor-5')) {
            primaryHue = 202
        }

        cor.classList.add('active')
        root.style.setProperty('--cor-primaria-hue', primaryHue)
    })
})

// temas de fundo
let corClara
let corBranca
let corEscura

const mudarFundo = () => {
    root.style.setProperty('--cor-clara-fundo', corClara)
    root.style.setProperty('--cor-branca-fundo', corBranca)
    root.style.setProperty('--cor-escura-fundo', corEscura)
}

bg1.addEventListener('click', () => {
    // classe ativa
    bg1.classList.add('active')

    // remover classe ativa
    bg2.classList.remove('active')
    bg3.classList.remove('active')
    // remover customização do armazenamento local
    window.location.reload()
})

bg2.addEventListener('click', () => {
    corEscura = '90%'
    corBranca = '20%'
    corClara = '15%'

    // classe ativa
    bg2.classList.add('active')

    // remover classe ativa
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    mudarFundo()
})

bg3.addEventListener('click', () => {
    corEscura = '90%'
    corBranca = '10%'
    corClara = '0%'

    // classe ativa
    bg3.classList.add('active')

    // remover classe ativa
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    mudarFundo()
})