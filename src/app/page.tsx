'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Heart, Users, Brain, Home, FileText, Shield, HelpCircle, Phone, Star } from 'lucide-react'

const chapters = [
  {
    id: 'cover',
    title: 'Capa',
    icon: BookOpen,
    content: 'cover'
  },
  {
    id: 'intro',
    title: 'Introdução',
    icon: Heart,
    content: 'intro'
  },
  {
    id: 'chapter1',
    title: 'O que é o Autismo',
    icon: Brain,
    content: 'chapter1'
  },
  {
    id: 'chapter2',
    title: 'Primeiros Sinais e Sintomas',
    icon: Users,
    content: 'chapter2'
  },
  {
    id: 'chapter3',
    title: 'Pré-Diagnóstico e Observação',
    icon: FileText,
    content: 'chapter3'
  },
  {
    id: 'chapter4',
    title: 'O Diagnóstico Profissional',
    icon: Shield,
    content: 'chapter4'
  },
  {
    id: 'chapter5',
    title: 'Primeiros Passos Após o Diagnóstico',
    icon: Heart,
    content: 'chapter5'
  },
  {
    id: 'chapter6',
    title: 'Estimulação e Cuidados em Casa',
    icon: Home,
    content: 'chapter6'
  },
  {
    id: 'chapter7',
    title: 'Direitos e Inclusão',
    icon: Shield,
    content: 'chapter7'
  },
  {
    id: 'chapter8',
    title: 'Mitos e Verdades',
    icon: HelpCircle,
    content: 'chapter8'
  },
  {
    id: 'chapter9',
    title: 'Recursos e Apoio',
    icon: Phone,
    content: 'chapter9'
  },
  {
    id: 'conclusion',
    title: 'Conclusão',
    icon: Star,
    content: 'conclusion'
  }
]

export default function EBookAutismo() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [showMenu, setShowMenu] = useState(false)

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1)
    }
  }

  const goToChapter = (index: number) => {
    setCurrentChapter(index)
    setShowMenu(false)
  }

  const renderContent = () => {
    const chapter = chapters[currentChapter]
    
    switch (chapter.content) {
      case 'cover':
        return (
          <div className="text-center space-y-8 py-16">
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Entendendo o Autismo
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Um Guia para Pais e Cuidadores
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Como reconhecer os sinais, buscar o diagnóstico e apoiar o desenvolvimento do seu filho
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg italic">
                "Cada criança é única e especial. Este guia foi criado com amor para ajudar você a compreender e apoiar o desenvolvimento do seu filho."
              </p>
            </div>
            
            <div className="text-sm text-gray-500 space-y-2">
              <p>E-book educativo e acolhedor</p>
              <p>Baseado em evidências científicas atuais</p>
              <p>Linguagem simples e empática</p>
            </div>
          </div>
        )

      case 'intro':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heart className="w-16 h-16 mx-auto text-pink-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Introdução</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
                <p className="text-xl leading-relaxed mb-4">
                  <strong>Queridos pais e cuidadores,</strong>
                </p>
                <p className="leading-relaxed">
                  Se você está lendo este guia, provavelmente tem dúvidas, preocupações ou simplesmente quer entender melhor o comportamento do seu filho. Talvez tenha notado que ele se desenvolve de forma diferente das outras crianças, ou talvez já tenha recebido um diagnóstico de Transtorno do Espectro Autista (TEA) e não sabe por onde começar.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                <strong>Respire fundo. Você não está sozinho nesta jornada.</strong>
              </p>

              <p className="leading-relaxed">
                Este guia foi criado especialmente para você, com linguagem simples, informações atualizadas e, principalmente, muito acolhimento. Aqui você não encontrará julgamentos, culpas ou medos desnecessários. Encontrará conhecimento, esperança e ferramentas práticas para apoiar seu filho da melhor forma possível.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">O que você aprenderá neste guia:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>O que é realmente o autismo e como ele se manifesta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Como reconhecer os primeiros sinais em diferentes idades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>O processo de diagnóstico e como se preparar para ele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Estratégias práticas para estimular seu filho em casa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Seus direitos e onde buscar apoio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Como desmistificar preconceitos e viver com esperança</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "A informação correta é o primeiro passo para transformar desafios em oportunidades de crescimento."
                </p>
                <p className="text-gray-600">
                  Cada página deste guia foi escrita pensando em você e no amor que sente pelo seu filho.
                </p>
              </div>

              <p className="leading-relaxed">
                Lembre-se: ter um filho no espectro autista não é o fim de um sonho, é o início de uma jornada diferente, mas igualmente bela e cheia de possibilidades. Com informação, paciência e muito amor, você será capaz de oferecer ao seu filho tudo o que ele precisa para se desenvolver e ser feliz.
              </p>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  Vamos começar esta jornada juntos? 💙
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter1':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Brain className="w-16 h-16 mx-auto text-blue-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 1</h1>
              <h2 className="text-2xl text-gray-600">O que é o Autismo</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Definição Simples e Atualizada</h3>
                <p className="text-lg leading-relaxed">
                  O <strong>Transtorno do Espectro Autista (TEA)</strong> é uma condição neurológica que afeta a forma como uma pessoa se comunica, interage socialmente e processa o mundo ao seu redor. É chamado de "espectro" porque se manifesta de maneiras muito diferentes em cada pessoa.
                </p>
              </div>

              <p className="leading-relaxed">
                Imagine o autismo como um arco-íris: há muitas cores diferentes, cada uma única e bela à sua maneira. Algumas crianças com TEA podem falar fluentemente e ter habilidades acadêmicas excepcionais, enquanto outras podem ter dificuldades de comunicação verbal, mas demonstrar talentos extraordinários em outras áreas.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Importante saber:</h3>
                <p className="text-yellow-700">
                  O autismo <strong>NÃO é</strong> uma doença que precisa ser "curada". É uma forma diferente de ser e estar no mundo. Com o apoio adequado, pessoas com TEA podem ter vidas plenas, felizes e produtivas.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Os Três Pilares do TEA</h3>
              
              <p className="leading-relaxed">
                O autismo se manifesta principalmente em três áreas:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-pink-50 rounded-xl p-6 text-center">
                  <Users className="w-12 h-12 mx-auto text-pink-500 mb-4" />
                  <h4 className="text-lg font-semibold text-pink-800 mb-2">1. Comunicação Social</h4>
                  <p className="text-pink-700 text-sm">
                    Dificuldades para iniciar conversas, manter contato visual ou entender sinais sociais não-verbais.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Brain className="w-12 h-12 mx-auto text-blue-500 mb-4" />
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Interação Social</h4>
                  <p className="text-blue-700 text-sm">
                    Preferência por atividades solitárias, dificuldade em fazer amizades ou compartilhar interesses.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">3. Comportamentos Repetitivos</h4>
                  <p className="text-purple-700 text-sm">
                    Movimentos repetitivos, fixação em rotinas ou interesses muito específicos e intensos.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Níveis de Suporte no Espectro</h3>

              <p className="leading-relaxed">
                Atualmente, os profissionais classificam o TEA em três níveis, baseados na quantidade de suporte que a pessoa precisa:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Nível 1 - Precisa de Suporte</h4>
                  <p className="text-green-700">
                    <strong>Características:</strong> Fala normalmente, pode ter dificuldades sociais sutis, prefere rotinas, mas consegue se adaptar com apoio mínimo.
                  </p>
                  <p className="text-green-700 mt-2">
                    <strong>Exemplo:</strong> Uma criança que conversa bem, mas tem dificuldade para fazer amigos ou entender piadas e sarcasmo.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Nível 2 - Precisa de Suporte Substancial</h4>
                  <p className="text-yellow-700">
                    <strong>Características:</strong> Comunicação verbal limitada, dificuldades sociais mais evidentes, mudanças na rotina causam muito desconforto.
                  </p>
                  <p className="text-yellow-700 mt-2">
                    <strong>Exemplo:</strong> Uma criança que fala frases simples, tem dificuldade para iniciar conversas e fica muito angustiada com mudanças imprevistas.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Nível 3 - Precisa de Suporte Muito Substancial</h4>
                  <p className="text-red-700">
                    <strong>Características:</strong> Comunicação verbal muito limitada ou ausente, grandes dificuldades sociais, comportamentos repetitivos intensos.
                  </p>
                  <p className="text-red-700 mt-2">
                    <strong>Exemplo:</strong> Uma criança que se comunica principalmente por gestos ou imagens, tem dificuldade para tolerar mudanças e precisa de apoio constante.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Lembre-se: independente do nível, cada criança tem seu próprio ritmo e potencial único. O importante é oferecer o suporte adequado para que ela possa florescer."
                </p>
                <p className="text-gray-600">
                  O diagnóstico não define limites, mas sim quais tipos de apoio serão mais úteis.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Pontos Importantes para Lembrar</h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span><strong>O autismo não tem "cara":</strong> Crianças com TEA podem ter aparência completamente típica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span><strong>Não é causado por vacinas:</strong> Estudos científicos comprovam que não há relação entre vacinas e autismo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span><strong>Não é culpa dos pais:</strong> O TEA tem origem neurológica e genética, não é resultado de "má criação".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span><strong>Cada pessoa é única:</strong> Duas crianças com autismo podem ser completamente diferentes entre si.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">✓</span>
                  <span><strong>Há muito potencial:</strong> Com apoio adequado, pessoas com TEA podem ter conquistas extraordinárias.</span>
                </li>
              </ul>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  Agora que você entende o que é o autismo, vamos aprender a reconhecer os primeiros sinais. 🌟
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter2':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Users className="w-16 h-16 mx-auto text-green-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 2</h1>
              <h2 className="text-2xl text-gray-600">Primeiros Sinais e Sintomas</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Reconhecer os primeiros sinais do autismo pode ser desafiador, especialmente porque cada criança se desenvolve em seu próprio ritmo. Este capítulo vai ajudá-lo a identificar comportamentos que merecem atenção, sempre lembrando que <strong>apenas profissionais qualificados podem fazer um diagnóstico</strong>.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Lembre-se sempre:</h3>
                <p className="text-yellow-700">
                  Ter alguns destes sinais <strong>NÃO significa automaticamente</strong> que a criança tem autismo. Muitos comportamentos são normais em certas fases do desenvolvimento. O importante é observar padrões persistentes e buscar orientação profissional quando houver dúvidas.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Sinais por Faixa Etária</h3>

              <div className="space-y-8">
                {/* Bebês 6-12 meses */}
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    Bebês (6 a 12 meses)
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-pink-700 mb-2">Sinais de Alerta:</h5>
                      <ul className="space-y-2 text-pink-600">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Não sorri de volta quando você sorri (após 6 meses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Não responde ao próprio nome</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Evita contato visual consistentemente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Não balbucia ou faz sons para se comunicar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Não aponta para objetos ou pessoas</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-pink-700 mb-2">Exemplos Práticos:</h5>
                      <ul className="space-y-2 text-pink-600">
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Quando você chama "João!", ele não olha na sua direção</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Não demonstra interesse quando você brinca de "esconde-esconde"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>Parece não notar quando você sai do quarto</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Crianças 12-24 meses */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Crianças (12 a 24 meses)
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Comunicação:</h5>
                      <ul className="space-y-2 text-blue-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não fala palavras simples até os 18 meses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não aponta para mostrar coisas interessantes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não imita gestos simples (tchau, bater palmas)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Perde habilidades que já tinha desenvolvido</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Comportamento Social:</h5>
                      <ul className="space-y-2 text-blue-600">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não demonstra interesse em outras crianças</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não traz objetos para mostrar aos pais</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Prefere brincar sozinha consistentemente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>Não responde quando chamada pelo nome</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Crianças 2-3 anos */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Crianças (2 a 3 anos)
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Linguagem e Comunicação:</h5>
                      <ul className="space-y-2 text-purple-600">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Não forma frases de 2 palavras aos 24 meses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Repete palavras ou frases sem contexto (ecolalia)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Não responde a perguntas simples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Fala de forma muito formal ou "robotizada"</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Comportamentos Repetitivos:</h5>
                      <ul className="space-y-2 text-purple-600">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Movimentos repetitivos (balançar, girar)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Obsessão por objetos específicos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Necessidade extrema de rotina</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>Reações intensas a mudanças pequenas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Crianças maiores */}
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Crianças Maiores (3+ anos)
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Interação Social:</h5>
                      <ul className="space-y-2 text-orange-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Dificuldade para fazer amizades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Não entende regras sociais básicas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Dificuldade com jogos imaginativos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Não compartilha interesses com outros</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Sensibilidades:</h5>
                      <ul className="space-y-2 text-orange-600">
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Sensibilidade extrema a sons, luzes ou texturas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Seletividade alimentar muito restrita</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Reações intensas a mudanças na rotina</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-orange-400 mt-1">•</span>
                          <span>Interesse obsessivo em temas específicos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Diferenciando Desenvolvimento Normal de Sinais de Alerta</h3>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-cyan-800 mb-4">É Normal Quando:</h4>
                <ul className="space-y-2 text-cyan-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>A criança tem fases de maior ou menor sociabilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Demonstra preferências por certas atividades ou brinquedos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Tem dificuldades temporárias com mudanças (mudança de casa, nascimento de irmão)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span>Desenvolve habilidades em ritmos diferentes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-red-800 mb-4">Merece Atenção Quando:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span>Os comportamentos são <strong>persistentes</strong> e não melhoram com o tempo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span>Há <strong>regressão</strong> - a criança perde habilidades que já tinha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span>Os comportamentos <strong>interferem significativamente</strong> no dia a dia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠</span>
                    <span>Você tem uma <strong>preocupação persistente</strong> que não passa</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Confie no seu instinto de pai ou mãe. Se algo não parece certo, busque orientação profissional. É sempre melhor investigar e descobrir que está tudo bem do que deixar passar uma oportunidade de ajuda precoce."
                </p>
                <p className="text-gray-600">
                  Lembre-se: identificar sinais precocemente é o melhor presente que você pode dar ao seu filho.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos aprender como você pode observar e documentar esses comportamentos de forma útil para os profissionais. 📝
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter3':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <FileText className="w-16 h-16 mx-auto text-purple-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 3</h1>
              <h2 className="text-2xl text-gray-600">Pré-Diagnóstico e Observação Familiar</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Você é quem melhor conhece seu filho. Suas observações são fundamentais para ajudar os profissionais a entenderem como a criança se comporta em diferentes situações. Este capítulo vai ensinar você a observar de forma estruturada e útil.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">O Poder da Observação dos Pais</h3>

              <p className="leading-relaxed">
                Profissionais de saúde veem seu filho por algumas horas durante consultas, mas você convive com ele todos os dias. Suas observações são insubstituíveis e extremamente valiosas para um diagnóstico preciso.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">📝 Como Observar de Forma Útil</h4>
                <p className="text-blue-700 mb-4">
                  Crie um "diário de observações" simples. Não precisa ser complicado - pode ser até no celular!
                </p>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-2">O que anotar:</h5>
                    <ul className="space-y-1 text-blue-700">
                      <li>• <strong>Data e hora</strong> do comportamento</li>
                      <li>• <strong>Situação</strong> em que aconteceu</li>
                      <li>• <strong>Descrição objetiva</strong> do que você viu</li>
                      <li>• <strong>Duração</strong> aproximada</li>
                      <li>• <strong>Como a criança reagiu</strong> depois</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Áreas Importantes para Observar</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Comunicação e Linguagem
                  </h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Como a criança pede as coisas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Ela aponta para mostrar coisas interessantes?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Faz contato visual durante conversas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Responde quando chamada pelo nome?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Usa gestos para se comunicar?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    Interação Social
                  </h4>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Como ela brinca com outras crianças?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Demonstra interesse em agradar os pais?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Compartilha alegria ou conquistas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Busca conforto quando machucada?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Imita comportamentos dos outros?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Comportamentos e Interesses
                  </h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Tem movimentos repetitivos?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Como reage a mudanças na rotina?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Tem interesses muito específicos?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Como brinca com brinquedos?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Tem rituais ou manias específicas?</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Sensibilidades
                  </h4>
                  <ul className="space-y-2 text-teal-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Como reage a sons altos ou inesperados?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Tem preferências alimentares muito restritas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Como reage a diferentes texturas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Tem dificuldades com luzes muito fortes?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Como reage ao toque ou abraços?</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Exemplo de Registro de Observação</h3>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">📋 Modelo de Anotação</h4>
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <p><strong>Data:</strong> 15/03/2024 - 14:30h</p>
                  <p><strong>Situação:</strong> Brincando no parque com outras crianças</p>
                  <p><strong>Observação:</strong> João ficou no balanço por 20 minutos, balançando sempre no mesmo ritmo. Quando uma criança se aproximou para brincar junto, ele saiu sem falar nada e foi para outro brinquedo. Não respondeu quando a criança o chamou pelo nome.</p>
                  <p><strong>Duração:</strong> Todo o tempo no parque (1 hora)</p>
                  <p><strong>Reação posterior:</strong> Ficou calmo, mas preferiu brincar sozinho o resto do tempo</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Ferramentas de Triagem (Explicação Simples)</h3>

              <p className="leading-relaxed">
                Existem questionários que ajudam a identificar sinais de autismo. Os mais conhecidos são o M-CHAT e o CARS. <strong>Importante:</strong> Estes são apenas ferramentas de triagem, não fazem diagnóstico!
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">M-CHAT (Modified Checklist for Autism in Toddlers)</h4>
                  <p className="text-blue-700 mb-3">
                    <strong>Para quem:</strong> Crianças entre 16 e 30 meses
                  </p>
                  <p className="text-blue-700 mb-3">
                    <strong>O que é:</strong> Um questionário com 23 perguntas simples sobre comportamentos da criança.
                  </p>
                  <p className="text-blue-700">
                    <strong>Exemplos de perguntas:</strong> "Sua criança gosta de ser balançada, de pular no seu joelho, etc.?" / "Sua criança aponta para pedir alguma coisa?"
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">CARS (Childhood Autism Rating Scale)</h4>
                  <p className="text-green-700 mb-3">
                    <strong>Para quem:</strong> Crianças acima de 2 anos
                  </p>
                  <p className="text-green-700 mb-3">
                    <strong>O que é:</strong> Uma escala que avalia 15 áreas do desenvolvimento e comportamento.
                  </p>
                  <p className="text-green-700">
                    <strong>Quem aplica:</strong> Geralmente profissionais treinados, mas pais podem conhecer os critérios para observar melhor.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Importante Lembrar:</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Essas ferramentas <strong>NÃO fazem diagnóstico</strong> - apenas indicam se é necessária uma avaliação mais detalhada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Um resultado "positivo" não significa que a criança tem autismo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Um resultado "negativo" não descarta completamente a possibilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Apenas profissionais qualificados podem fazer diagnóstico de TEA</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Quando Buscar Avaliação Profissional</h3>

              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-red-800 mb-4">🚨 Busque ajuda profissional se:</h4>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠</span>
                    <span>Você tem preocupações persistentes sobre o desenvolvimento do seu filho</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠</span>
                    <span>A criança perdeu habilidades que já tinha (regressão)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠</span>
                    <span>Há múltiplos sinais de alerta presentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠</span>
                    <span>Professores ou cuidadores também expressaram preocupações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">⚠</span>
                    <span>Os comportamentos interferem significativamente no dia a dia da família</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Suas observações são um presente valioso para seu filho. Elas podem ser a chave para ele receber o apoio de que precisa no momento certo."
                </p>
                <p className="text-gray-600">
                  Lembre-se: é sempre melhor investigar e descobrir que não há necessidade de preocupação do que deixar passar uma oportunidade de intervenção precoce.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos entender como funciona o processo de diagnóstico profissional e como você pode se preparar para ele. 🩺
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter4':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Shield className="w-16 h-16 mx-auto text-indigo-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 4</h1>
              <h2 className="text-2xl text-gray-600">O Diagnóstico Profissional</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  O diagnóstico de TEA é um processo cuidadoso que envolve diferentes profissionais e várias etapas. Entender como funciona pode ajudar você a se preparar melhor e saber o que esperar de cada consulta.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Por Onde Começar</h3>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-3">🏥 Primeiro Passo: Pediatra</h4>
                <p className="text-blue-700 mb-3">
                  O pediatra que acompanha seu filho é geralmente o primeiro profissional a procurar. Ele conhece o histórico da criança e pode:
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Fazer uma avaliação inicial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Descartar outras condições médicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Encaminhar para especialistas quando necessário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Orientar sobre os próximos passos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Profissionais Envolvidos no Diagnóstico</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Neuropediatra
                  </h4>
                  <p className="text-purple-700 mb-3">
                    <strong>O que faz:</strong> Especialista em desenvolvimento neurológico infantil
                  </p>
                  <ul className="space-y-2 text-purple-600">
                    <li>• Avalia o desenvolvimento neurológico</li>
                    <li>• Descarta outras condições neurológicas</li>
                    <li>• Pode solicitar exames complementares</li>
                    <li>• Faz diagnóstico médico do TEA</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Psicólogo
                  </h4>
                  <p className="text-green-700 mb-3">
                    <strong>O que faz:</strong> Avalia comportamento e desenvolvimento psicológico
                  </p>
                  <ul className="space-y-2 text-green-600">
                    <li>• Aplica testes psicológicos específicos</li>
                    <li>• Avalia habilidades cognitivas</li>
                    <li>• Observa comportamentos sociais</li>
                    <li>• Contribui para o diagnóstico diferencial</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6" />
                    Fonoaudiólogo
                  </h4>
                  <p className="text-orange-700 mb-3">
                    <strong>O que faz:</strong> Avalia comunicação e linguagem
                  </p>
                  <ul className="space-y-2 text-orange-600">
                    <li>• Avalia desenvolvimento da fala</li>
                    <li>• Testa compreensão da linguagem</li>
                    <li>• Observa comunicação não-verbal</li>
                    <li>• Identifica necessidades terapêuticas</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Terapeuta Ocupacional
                  </h4>
                  <p className="text-teal-700 mb-3">
                    <strong>O que faz:</strong> Avalia habilidades motoras e sensoriais
                  </p>
                  <ul className="space-y-2 text-teal-600">
                    <li>• Avalia coordenação motora</li>
                    <li>• Testa processamento sensorial</li>
                    <li>• Observa habilidades do dia a dia</li>
                    <li>• Identifica necessidades de adaptação</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Como Funciona o Processo de Avaliação</h3>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-cyan-800 mb-4">📋 Etapa 1: Anamnese (Entrevista Detalhada)</h4>
                  <p className="text-cyan-700 mb-3">
                    O profissional fará perguntas detalhadas sobre:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-cyan-600">
                      <li>• Histórico da gravidez e parto</li>
                      <li>• Marcos do desenvolvimento</li>
                      <li>• Comportamentos atuais</li>
                      <li>• Histórico familiar</li>
                    </ul>
                    <ul className="space-y-2 text-cyan-600">
                      <li>• Rotina da criança</li>
                      <li>• Interações sociais</li>
                      <li>• Comunicação e linguagem</li>
                      <li>• Sensibilidades e preferências</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-pink-800 mb-4">🔍 Etapa 2: Observação Clínica</h4>
                  <p className="text-pink-700 mb-3">
                    O profissional observará a criança em diferentes situações:
                  </p>
                  <ul className="space-y-2 text-pink-600">
                    <li>• Brincadeira livre</li>
                    <li>• Interação com os pais</li>
                    <li>• Resposta a comandos simples</li>
                    <li>• Comportamento durante atividades estruturadas</li>
                    <li>• Reações a mudanças no ambiente</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-4">📊 Etapa 3: Aplicação de Instrumentos Específicos</h4>
                  <p className="text-green-700 mb-3">
                    Podem ser utilizados testes padronizados como:
                  </p>
                  <ul className="space-y-2 text-green-600">
                    <li>• <strong>ADOS-2:</strong> Observação estruturada de comportamentos autísticos</li>
                    <li>• <strong>ADI-R:</strong> Entrevista detalhada com os pais</li>
                    <li>• <strong>CARS-2:</strong> Escala de avaliação do autismo</li>
                    <li>• <strong>Testes cognitivos:</strong> Para avaliar habilidades intelectuais</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Como Se Preparar para as Consultas</h3>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">📝 O que levar para a consulta:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Documentos:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• Cartão de vacinas atualizado</li>
                      <li>• Relatórios escolares ou da creche</li>
                      <li>• Exames médicos anteriores</li>
                      <li>• Relatórios de outros profissionais</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Informações:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• Diário de observações</li>
                      <li>• Vídeos de comportamentos típicos</li>
                      <li>• Lista de preocupações específicas</li>
                      <li>• Histórico familiar de TEA ou outros transtornos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">💡 Dicas para a consulta:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Seja honesto e específico:</strong> Descreva comportamentos sem minimizar ou exagerar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Faça perguntas:</strong> Não saia com dúvidas - anote suas perguntas antes da consulta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Leve a criança descansada:</strong> Marque consultas em horários que ela esteja bem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Traga brinquedos familiares:</strong> Podem ajudar a criança a se sentir mais confortável</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">O que Esperar do Resultado</h3>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Se o diagnóstico for confirmado:</h4>
                  <p className="text-green-700 mb-3">
                    O profissional deve explicar claramente:
                  </p>
                  <ul className="space-y-2 text-green-600">
                    <li>• Qual nível de suporte a criança precisa</li>
                    <li>• Quais terapias são recomendadas</li>
                    <li>• Como proceder com intervenções</li>
                    <li>• Direitos e recursos disponíveis</li>
                    <li>• Prognóstico e expectativas realistas</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">❓ Se o diagnóstico não for conclusivo:</h4>
                  <p className="text-orange-700 mb-3">
                    Às vezes é necessário:
                  </p>
                  <ul className="space-y-2 text-orange-600">
                    <li>• Aguardar mais desenvolvimento da criança</li>
                    <li>• Fazer reavaliações periódicas</li>
                    <li>• Investigar outras condições</li>
                    <li>• Buscar segunda opinião</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="text-xl font-semibold text-red-800 mb-3">🚨 Sinais de Alerta sobre o Profissional:</h4>
                <p className="text-red-700 mb-3">
                  Desconfie se o profissional:
                </p>
                <ul className="space-y-2 text-red-600">
                  <li>• Faz diagnóstico em uma única consulta rápida</li>
                  <li>• Não ouve suas preocupações</li>
                  <li>• Promete "cura" para o autismo</li>
                  <li>• Recomenda tratamentos não comprovados cientificamente</li>
                  <li>• Não explica claramente o processo ou resultado</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Tempo do Processo</h3>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  <strong>O diagnóstico de TEA não é feito da noite para o dia.</strong> O processo completo pode levar:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>2 a 6 meses</strong> no sistema público</li>
                  <li>• <strong>1 a 3 meses</strong> no sistema privado</li>
                  <li>• <strong>Múltiplas consultas</strong> com diferentes profissionais</li>
                  <li>• <strong>Período de observação</strong> em alguns casos</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Lembre-se:</strong> Um diagnóstico cuidadoso é mais importante que um diagnóstico rápido.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "O diagnóstico não é um fim, mas sim o início de uma jornada de compreensão e apoio adequado para seu filho."
                </p>
                <p className="text-gray-600">
                  Com o diagnóstico em mãos, você terá as ferramentas necessárias para oferecer o melhor suporte possível.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos falar sobre como lidar emocionalmente com o diagnóstico e quais são os primeiros passos a seguir. 💙
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter5':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Heart className="w-16 h-16 mx-auto text-rose-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 5</h1>
              <h2 className="text-2xl text-gray-600">Primeiros Passos Após o Diagnóstico</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Receber o diagnóstico de TEA pode despertar uma mistura de sentimentos: alívio por ter respostas, preocupação com o futuro, ou até mesmo negação. Todos esses sentimentos são normais e válidos. Este capítulo vai ajudá-lo a processar essas emoções e dar os primeiros passos práticos.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Lidando com as Emoções</h3>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">💙 É Normal Sentir:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Alívio:</strong> "Finalmente tenho respostas"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Medo:</strong> "Como será o futuro do meu filho?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Culpa:</strong> "Será que fiz algo errado?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Tristeza:</strong> "Não era isso que eu esperava"</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Confusão:</strong> "E agora, o que fazer?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Esperança:</strong> "Agora posso ajudar melhor"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Sobrecarga:</strong> "São muitas informações"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Determinação:</strong> "Vou fazer tudo pelo meu filho"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">🌱 Estratégias para Processar as Emoções:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Permita-se sentir:</strong> Não reprima suas emoções. É natural passar por um período de adaptação.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Converse com seu parceiro:</strong> Compartilhem sentimentos e apoiem-se mutuamente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Busque apoio profissional:</strong> Terapia familiar pode ser muito útil neste momento.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Conecte-se com outros pais:</strong> Grupos de apoio oferecem compreensão única.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span><strong>Cuide de si mesmo:</strong> Você precisa estar bem para cuidar do seu filho.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">A Importância da Aceitação</h3>

              <p className="leading-relaxed">
                Aceitar o diagnóstico não significa "se conformar" ou "desistir". Significa reconhecer a realidade para poder agir de forma efetiva. A aceitação é um processo, não um evento único, e cada pessoa tem seu próprio tempo.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">🔄 Fases da Aceitação (não necessariamente nesta ordem):</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">1. Negação</h5>
                    <p className="text-purple-600">"Deve haver um engano", "Ele vai superar isso", "Preciso de uma segunda opinião"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">2. Raiva</h5>
                    <p className="text-purple-600">"Por que comigo?", "Não é justo", "Os médicos não sabem de nada"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">3. Barganha</h5>
                    <p className="text-purple-600">"Se eu fizer tudo certinho, ele vai melhorar", "Vou encontrar a cura"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">4. Tristeza</h5>
                    <p className="text-purple-600">"Meu filho nunca será 'normal'", "Perdi o filho que imaginei ter"</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-purple-700 mb-2">5. Aceitação</h5>
                    <p className="text-purple-600">"Meu filho é especial do jeito que é", "Vamos trabalhar com o que temos"</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Importante Lembrar:</h4>
                <ul className="space-y-2 text-yellow-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Não há tempo "certo" para aceitar - cada família tem seu ritmo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>É normal "voltar" a fases anteriores em momentos difíceis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Buscar ajuda profissional não é sinal de fraqueza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>Seu filho continua sendo a mesma criança amada de sempre</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Primeiros Passos Práticos</h3>

              <div className="space-y-6">
                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    1. Organize a Documentação
                  </h4>
                  <ul className="space-y-2 text-teal-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Guarde todos os relatórios médicos em uma pasta organizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Faça cópias dos documentos importantes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Crie um arquivo digital com fotos dos documentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Mantenha um histórico das consultas e observações</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    2. Monte sua Rede de Apoio
                  </h4>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Identifique familiares e amigos que podem apoiar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Procure grupos de pais de crianças com TEA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Conecte-se com associações locais de autismo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>Considere terapia familiar ou individual</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    3. Eduque-se sobre o TEA
                  </h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Leia materiais confiáveis sobre autismo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Participe de palestras e workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Converse com outros pais experientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Mantenha-se atualizado sobre novas pesquisas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Encontrando Terapias Adequadas</h3>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">🎯 Principais Terapias para TEA:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3">Terapias Comportamentais:</h5>
                    <ul className="space-y-2 text-blue-600">
                      <li>• <strong>ABA (Applied Behavior Analysis):</strong> Análise aplicada do comportamento</li>
                      <li>• <strong>TEACCH:</strong> Ensino estruturado</li>
                      <li>• <strong>PECS:</strong> Sistema de comunicação por figuras</li>
                      <li>• <strong>Denver:</strong> Modelo de intervenção precoce</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3">Terapias Complementares:</h5>
                    <ul className="space-y-2 text-blue-600">
                      <li>• <strong>Fonoaudiologia:</strong> Desenvolvimento da comunicação</li>
                      <li>• <strong>Terapia Ocupacional:</strong> Habilidades motoras e sensoriais</li>
                      <li>• <strong>Psicoterapia:</strong> Apoio emocional e social</li>
                      <li>• <strong>Fisioterapia:</strong> Desenvolvimento motor (quando necessário)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="text-xl font-semibold text-red-800 mb-3">🚨 Como Escolher Profissionais:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Verifique qualificações:</strong> Certificações específicas em TEA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Peça referências:</strong> Outros pais, médicos, associações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Observe a interação:</strong> Como o profissional se relaciona com sua criança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Avalie a comunicação:</strong> Explica claramente os métodos e objetivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Desconfie de promessas irreais:</strong> Ninguém pode garantir "cura"</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Cuidando da Família Toda</h3>

              <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-400">
                <h4 className="text-xl font-semibold text-pink-800 mb-4">👨‍👩‍👧‍👦 Não Esqueça dos Irmãos:</h4>
                <ul className="space-y-2 text-pink-700">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Explique sobre o autismo de forma adequada à idade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Reserve tempo individual para cada filho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Permita que expressem seus sentimentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Evite sobrecarregá-los com responsabilidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Considere grupos de apoio para irmãos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">💚 Cuidando de Você:</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reserve tempo para atividades que gosta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Mantenha relacionamentos sociais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Pratique exercícios físicos regularmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Busque momentos de relaxamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Não hesite em pedir ajuda quando precisar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Lembre-se: você não precisa ser perfeito, apenas presente. Seu amor e dedicação já fazem toda a diferença na vida do seu filho."
                </p>
                <p className="text-gray-600">
                  Cada pequeno passo é uma vitória. Celebre os progressos e seja gentil consigo mesmo nos dias difíceis.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos aprender estratégias práticas para estimular e cuidar do seu filho em casa. 🏠
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter6':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Home className="w-16 h-16 mx-auto text-emerald-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 6</h1>
              <h2 className="text-2xl text-gray-600">Estimulação e Cuidados em Casa</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Sua casa é o ambiente onde seu filho passa a maior parte do tempo, e você pode transformá-la em um espaço rico em oportunidades de aprendizado e desenvolvimento. Este capítulo oferece estratégias práticas e acessíveis para estimular seu filho no dia a dia.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">A Importância da Rotina Estruturada</h3>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">🕐 Por que a Rotina é Fundamental:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Oferece previsibilidade e segurança emocional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Reduz ansiedade e comportamentos desafiadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Facilita o aprendizado de habilidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Desenvolve independência e autonomia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Melhora a qualidade do sono e alimentação</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-green-800 mb-4">📅 Exemplo de Rotina Diária Estruturada:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 flex items-center gap-4">
                    <span className="text-2xl">🌅</span>
                    <div>
                      <h5 className="font-semibold text-green-700">7:00 - Despertar</h5>
                      <p className="text-green-600">Mesma música, mesma sequência: levantar, ir ao banheiro, lavar o rosto</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center gap-4">
                    <span className="text-2xl">🥣</span>
                    <div>
                      <h5 className="font-semibold text-green-700">7:30 - Café da Manhã</h5>
                      <p className="text-green-600">Mesmo local, mesmos utensílios, envolver a criança na preparação</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center gap-4">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h5 className="font-semibold text-green-700">8:30 - Atividade Estruturada</h5>
                      <p className="text-green-600">15-30 minutos de atividade dirigida (quebra-cabeça, desenho, etc.)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center gap-4">
                    <span className="text-2xl">🎮</span>
                    <div>
                      <h5 className="font-semibold text-green-700">9:00 - Brincadeira Livre</h5>
                      <p className="text-green-600">Tempo para explorar interesses próprios, com supervisão discreta</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Estratégias para Desenvolvimento da Comunicação</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Comunicação Verbal
                  </h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Narrar ações:</strong> "Agora vamos escovar os dentes"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Dar tempo:</strong> Aguarde resposta antes de repetir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Usar frases simples:</strong> "Quer água?" em vez de "Você gostaria de beber um pouco de água?"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span><strong>Repetir palavras importantes:</strong> "Bola. Vamos jogar bola. Bola azul."</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Comunicação Não-Verbal
                  </h4>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Usar gestos:</strong> Apontar, acenar, bater palmas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Cartões com figuras:</strong> Para pedidos básicos (água, banheiro, comida)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Expressões faciais:</strong> Exagerar emoções para facilitar compreensão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Posicionar-se na altura da criança:</strong> Facilita contato visual</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Atividades de Estimulação por Área</h3>

              <div className="space-y-6">
                <div className="bg-cyan-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-cyan-800 mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    Estimulação Cognitiva
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-cyan-700 mb-2">Atividades Simples:</h5>
                      <ul className="space-y-1 text-cyan-600">
                        <li>• Quebra-cabeças simples (2-4 peças)</li>
                        <li>• Encaixar formas geométricas</li>
                        <li>• Separar objetos por cor/tamanho</li>
                        <li>• Jogos de memória com 4-6 cartas</li>
                        <li>• Contar objetos do dia a dia</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-cyan-700 mb-2">Dicas Importantes:</h5>
                      <ul className="space-y-1 text-cyan-600">
                        <li>• Começar com atividades muito fáceis</li>
                        <li>• Aumentar dificuldade gradualmente</li>
                        <li>• Celebrar cada pequena conquista</li>
                        <li>• Respeitar o tempo da criança</li>
                        <li>• Parar antes que fique frustrada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-pink-800 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    Estimulação Social
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-pink-700 mb-2">Em Casa:</h5>
                      <ul className="space-y-1 text-pink-600">
                        <li>• Brincadeiras de imitação</li>
                        <li>• Jogos de "faz de conta" simples</li>
                        <li>• Cantar músicas com gestos</li>
                        <li>• Brincar de esconde-esconde</li>
                        <li>• Atividades de cozinha juntos</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-pink-700 mb-2">Com Outras Pessoas:</h5>
                      <ul className="space-y-1 text-pink-600">
                        <li>• Visitas curtas de familiares</li>
                        <li>• Brincadeiras com irmãos</li>
                        <li>• Atividades em pequenos grupos</li>
                        <li>• Passeios em locais familiares</li>
                        <li>• Interação supervisionada com pares</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Estimulação Sensorial
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-yellow-700 mb-2">Atividades Táteis:</h5>
                      <ul className="space-y-1 text-yellow-600">
                        <li>• Caixa com diferentes texturas</li>
                        <li>• Massinha de modelar</li>
                        <li>• Brincar com água e areia</li>
                        <li>• Tecidos de diferentes texturas</li>
                        <li>• Pintura com os dedos</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-700 mb-2">Outras Estimulações:</h5>
                      <ul className="space-y-1 text-yellow-600">
                        <li>• Música em diferentes volumes</li>
                        <li>• Luzes coloridas suaves</li>
                        <li>• Cheiros agradáveis (frutas, flores)</li>
                        <li>• Movimentos de balanço</li>
                        <li>• Exercícios de respiração</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Lidando com Comportamentos Desafiadores</h3>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="text-xl font-semibold text-red-800 mb-4">🚨 Estratégias Preventivas:</h4>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Identifique gatilhos:</strong> O que geralmente precede o comportamento?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Antecipe necessidades:</strong> Ofereça lanche antes da fome, descanso antes do cansaço</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Prepare para mudanças:</strong> Avise sobre alterações na rotina com antecedência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Ofereça escolhas:</strong> "Quer usar a camiseta azul ou vermelha?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Mantenha ambiente calmo:</strong> Reduza estímulos excessivos quando necessário</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">🛠️ Durante uma Crise:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Mantenha-se calmo:</strong> Sua tranquilidade ajuda a criança a se acalmar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Garanta segurança:</strong> Remova objetos perigosos, mas não contenha fisicamente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Reduza estímulos:</strong> Diminua luzes, sons, movimento ao redor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Use poucas palavras:</strong> "Estou aqui", "Você está seguro"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Aguarde passar:</strong> Não tente ensinar ou corrigir durante a crise</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Envolvendo Irmãos e Familiares</h3>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">👨‍👩‍👧‍👦 Orientações para a Família:</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Explique de forma simples:</strong> "João precisa de mais tempo para aprender algumas coisas"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Ensine estratégias básicas:</strong> Como se comunicar, como ajudar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Valorize contribuições:</strong> "Que bom que você ajudou seu irmão!"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Mantenha expectativas realistas:</strong> Não sobrecarregue irmãos com responsabilidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Promova momentos positivos:</strong> Atividades que todos possam desfrutar juntos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Adaptações no Ambiente Doméstico</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">🏠 Organização Física</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li>• Espaços bem definidos para cada atividade</li>
                    <li>• Materiais organizados em caixas etiquetadas</li>
                    <li>• Área calma para momentos de descanso</li>
                    <li>• Iluminação adequada e não muito forte</li>
                    <li>• Redução de ruídos desnecessários</li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-4">📋 Apoios Visuais</h4>
                  <ul className="space-y-2 text-teal-700">
                    <li>• Quadro de rotina com figuras</li>
                    <li>• Calendário visual simples</li>
                    <li>• Etiquetas com fotos nos objetos</li>
                    <li>• Cartões de comunicação básica</li>
                    <li>• Timer visual para atividades</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Lembre-se: pequenas mudanças consistentes geram grandes resultados. Cada momento de interação positiva é uma oportunidade de crescimento."
                </p>
                <p className="text-gray-600">
                  Seja paciente consigo mesmo e com seu filho. O desenvolvimento acontece no tempo de cada criança.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos conhecer os direitos garantidos por lei e como acessar os recursos disponíveis. ⚖️
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter7':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Shield className="w-16 h-16 mx-auto text-blue-600" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 7</h1>
              <h2 className="text-2xl text-gray-600">Direitos e Inclusão</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Conhecer os direitos do seu filho é fundamental para garantir que ele receba todo o apoio necessário. No Brasil, existem leis específicas que protegem pessoas com TEA e garantem acesso a serviços essenciais. Este capítulo vai orientá-lo sobre seus direitos e como exercê-los.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Marco Legal: Lei Berenice Piana</h3>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">📜 Lei 12.764/2012 - Lei Berenice Piana</h4>
                <p className="text-green-700 mb-3">
                  Esta lei instituiu a <strong>Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista</strong> e estabelece que:
                </p>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Pessoas com TEA são consideradas <strong>pessoas com deficiência</strong> para todos os efeitos legais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Têm direito a <strong>diagnóstico precoce</strong> e <strong>atendimento multiprofissional</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Garantia de <strong>acesso à educação</strong> e ao <strong>ensino profissionalizante</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Direito ao <strong>acompanhante especializado</strong> na escola quando necessário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Acesso a <strong>medicamentos</strong> e <strong>informações adequadas</strong></span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Direitos na Educação</h3>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Educação Inclusiva
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">A escola DEVE oferecer:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Matrícula em escola regular</li>
                        <li>• Acompanhante especializado (quando necessário)</li>
                        <li>• Adaptações curriculares</li>
                        <li>• Atendimento Educacional Especializado (AEE)</li>
                        <li>• Formação de professores</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">A escola NÃO PODE:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Recusar a matrícula</li>
                        <li>• Cobrar taxa adicional</li>
                        <li>• Reduzir carga horária</li>
                        <li>• Negar acompanhante quando necessário</li>
                        <li>• Isolar a criança dos demais alunos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                  <h4 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Como Garantir os Direitos na Escola:</h4>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Leve o laudo médico:</strong> Comprova a necessidade de adaptações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Solicite reunião:</strong> Converse com coordenação e professores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Documente tudo:</strong> Mantenha registro de conversas e solicitações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Conheça o PEI:</strong> Plano Educacional Individualizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span><strong>Procure apoio:</strong> Secretaria de Educação, Ministério Público</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Direitos na Saúde</h3>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">🏥 Sistema Único de Saúde (SUS)</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Serviços Garantidos:</h5>
                    <ul className="space-y-1 text-purple-600">
                      <li>• Diagnóstico multiprofissional</li>
                      <li>• Consultas especializadas</li>
                      <li>• Terapias (fono, TO, psicologia)</li>
                      <li>• Medicamentos prescritos</li>
                      <li>• Exames complementares</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Onde Buscar:</h5>
                    <ul className="space-y-1 text-purple-600">
                      <li>• CAPS (Centro de Atenção Psicossocial)</li>
                      <li>• CER (Centro Especializado em Reabilitação)</li>
                      <li>• APAE local</li>
                      <li>• Ambulatórios especializados</li>
                      <li>• Unidades Básicas de Saúde</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-400">
                <h4 className="text-xl font-semibold text-teal-800 mb-4">💊 Planos de Saúde</h4>
                <p className="text-teal-700 mb-3">
                  Os planos de saúde são <strong>obrigados</strong> a cobrir:
                </p>
                <ul className="space-y-2 text-teal-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Consultas com especialistas (neurologista, psiquiatra, psicólogo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Terapias essenciais (fonoaudiologia, terapia ocupacional, psicoterapia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Análise Aplicada do Comportamento (ABA) - conforme regulamentação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Exames diagnósticos necessários</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Benefícios Sociais</h3>

              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Phone className="w-6 h-6" />
                    BPC - Benefício de Prestação Continuada
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">O que é:</h5>
                      <p className="text-green-600 mb-2">
                        Benefício de 1 salário mínimo mensal para pessoas com deficiência de baixa renda.
                      </p>
                      <h5 className="font-semibold text-green-700 mb-2">Requisitos:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Renda familiar per capita até 1/4 do salário mínimo</li>
                        <li>• Laudo médico comprovando a deficiência</li>
                        <li>• Inscrição no CadÚnico</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Como solicitar:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Agendar no INSS (135 ou site)</li>
                        <li>• Levar documentos necessários</li>
                        <li>• Passar por perícia médica</li>
                        <li>• Aguardar análise socioeconômica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Outros Benefícios
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Transporte:</h5>
                      <ul className="space-y-1 text-orange-600">
                        <li>• Passe livre interestadual</li>
                        <li>• Gratuidade no transporte público local</li>
                        <li>• Desconto na compra de veículos</li>
                        <li>• Isenção de IPVA (em alguns estados)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Outros:</h5>
                      <ul className="space-y-1 text-orange-600">
                        <li>• Prioridade em filas</li>
                        <li>• Vagas preferenciais de estacionamento</li>
                        <li>• Meia-entrada em eventos culturais</li>
                        <li>• Saque do FGTS (casos específicos)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Como Buscar Suporte Público</h3>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">🏛️ Órgãos de Apoio</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Secretaria Municipal de Saúde</h5>
                    <p className="text-blue-600">Informações sobre serviços de saúde, CAPS, CER e encaminhamentos.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Secretaria Municipal de Educação</h5>
                    <p className="text-blue-600">Orientações sobre inclusão escolar, AEE e formação de professores.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Secretaria de Assistência Social</h5>
                    <p className="text-blue-600">Informações sobre benefícios sociais e programas de apoio às famílias.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Ministério Público</h5>
                    <p className="text-blue-600">Quando direitos não são respeitados, pode intervir para garantir cumprimento das leis.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-blue-700 mb-2">Defensoria Pública</h5>
                    <p className="text-blue-600">Assistência jurídica gratuita para famílias de baixa renda.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Documentos Importantes</h3>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">📋 Mantenha Sempre Organizados:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Documentos Médicos:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• Laudo médico atualizado</li>
                      <li>• Relatórios de terapias</li>
                      <li>• Prescrições médicas</li>
                      <li>• Exames complementares</li>
                      <li>• Cartão de vacinas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Documentos Pessoais:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• CPF da criança</li>
                      <li>• RG ou certidão de nascimento</li>
                      <li>• Comprovante de residência</li>
                      <li>• Comprovante de renda familiar</li>
                      <li>• Cartão do SUS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Quando os Direitos Não São Respeitados</h3>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="text-xl font-semibold text-red-800 mb-4">🚨 Passos a Seguir:</h4>
                <ol className="space-y-3 text-red-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">1.</span>
                    <span><strong>Documente tudo:</strong> Registre conversas, e-mails, protocolos de atendimento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">2.</span>
                    <span><strong>Procure a ouvidoria:</strong> Do órgão responsável (escola, plano de saúde, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">3.</span>
                    <span><strong>Acione órgãos de controle:</strong> Ministério Público, Defensoria Pública</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">4.</span>
                    <span><strong>Busque apoio:</strong> Associações de pais, ONGs, advogados especializados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">5.</span>
                    <span><strong>Não desista:</strong> Persistência é fundamental para garantir direitos</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Conhecer seus direitos é o primeiro passo para garantir que seu filho tenha acesso a tudo que precisa para se desenvolver plenamente."
                </p>
                <p className="text-gray-600">
                  Lembre-se: você não está pedindo favor, está exercendo direitos garantidos por lei.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos desmistificar preconceitos e conhecer verdades importantes sobre o autismo. 💡
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter8':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <HelpCircle className="w-16 h-16 mx-auto text-amber-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 8</h1>
              <h2 className="text-2xl text-gray-600">Mitos e Verdades sobre o Autismo</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Infelizmente, ainda existem muitos mitos e informações incorretas sobre o autismo circulando na sociedade. Esses equívocos podem gerar preconceito, culpa desnecessária e decisões prejudiciais. Este capítulo vai esclarecer os principais mitos e apresentar as verdades baseadas em evidências científicas.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Mitos Sobre as Causas do Autismo</h3>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Vacinas causam autismo"</h4>
                      <p className="text-red-700 mb-3">
                        Este é um dos mitos mais perigosos e já foi completamente desmentido pela ciência.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Vacinas são seguras e NÃO causam autismo</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Múltiplos estudos com milhões de crianças comprovaram que não há relação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O estudo que sugeria essa ligação foi considerado fraudulento e retirado da literatura científica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Vacinas salvam vidas e são essenciais para a saúde pública</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O autismo tem origem genética e neurológica, não relacionada a vacinas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "É culpa dos pais ou da criação"</h4>
                      <p className="text-red-700">
                        Antigamente, acreditava-se que "mães geladeiras" causavam autismo por falta de afeto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: O autismo tem origem neurobiológica</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>É uma condição neurológica presente desde o nascimento</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Tem forte componente genético (hereditário)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Não é causado por estilo de criação ou trauma emocional</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Pais amorosos e dedicados NÃO causam autismo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Mitos Sobre Características do Autismo</h3>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Pessoas com autismo não sentem emoções"</h4>
                      <p className="text-red-700">
                        Muitos acreditam que pessoas com TEA são "frias" ou não demonstram afeto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Pessoas com autismo sentem emoções profundamente</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Podem expressar emoções de forma diferente, mas as sentem intensamente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Muitas vezes são extremamente empáticas e sensíveis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Podem ter dificuldade para expressar ou interpretar emoções, não para senti-las</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Formam vínculos afetivos profundos com familiares e amigos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Todas as pessoas com autismo são gênios ou têm habilidades especiais"</h4>
                      <p className="text-red-700">
                        Filmes e mídia criaram a imagem de que todo autista é um "savant" com superpoderes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Pessoas com autismo têm habilidades variadas como qualquer pessoa</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Apenas 10% das pessoas com TEA têm habilidades "savant"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>A maioria tem inteligência na média ou pode ter deficiência intelectual</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Cada pessoa tem seus próprios talentos e desafios únicos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O importante é desenvolver o potencial individual de cada um</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Mitos Sobre Tratamento e Prognóstico</h3>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Autismo tem cura"</h4>
                      <p className="text-red-700">
                        Muitos charlatões prometem "curas milagrosas" aproveitando-se do desespero das famílias.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Autismo não precisa de "cura", mas de apoio adequado</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Autismo não é uma doença, é uma condição neurológica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Com intervenções adequadas, pessoas com TEA podem ter grandes progressos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O objetivo é desenvolver habilidades e melhorar qualidade de vida</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Muitas pessoas com autismo levam vidas plenas e independentes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Dietas especiais curam o autismo"</h4>
                      <p className="text-red-700">
                        Dietas sem glúten, sem caseína, ou outros regimes restritivos são vendidos como "curas".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Não há evidência científica de que dietas especiais tratem o autismo</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Estudos rigorosos não encontraram benefícios das dietas restritivas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Dietas muito restritivas podem causar deficiências nutricionais</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Uma alimentação equilibrada e variada é o melhor para qualquer criança</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Consulte sempre um nutricionista antes de fazer mudanças drásticas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Mitos Sobre Capacidades e Limitações</h3>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Pessoas com autismo nunca conseguem viver independentemente"</h4>
                      <p className="text-red-700">
                        Muitos acreditam que o autismo sempre resulta em dependência total.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Muitas pessoas com autismo vivem de forma independente</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Pessoas com TEA podem trabalhar, estudar, casar e ter filhos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O nível de independência varia muito de pessoa para pessoa</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Intervenção precoce aumenta significativamente as chances de independência</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Apoio adequado pode fazer toda a diferença no desenvolvimento</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">❌</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-red-800 mb-2">MITO: "Crianças com autismo não podem aprender"</h4>
                      <p className="text-red-700">
                        Alguns acreditam que o autismo impede completamente o aprendizado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✅</span>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-green-800 mb-2">VERDADE: Todas as crianças com autismo podem aprender</h4>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Podem precisar de métodos de ensino adaptados às suas necessidades</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Cada criança tem seu próprio ritmo e estilo de aprendizagem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>Muitas desenvolvem habilidades acadêmicas excepcionais</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>O importante é encontrar a abordagem pedagógica adequada</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Tratamentos Sem Comprovação Científica</h3>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">⚠️ Cuidado com "Tratamentos Milagrosos":</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Sem Evidência Científica:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• Quelação (remoção de metais)</li>
                      <li>• Câmara hiperbárica</li>
                      <li>• Suplementos "milagrosos"</li>
                      <li>• Dietas extremamente restritivas</li>
                      <li>• Terapias com animais não regulamentadas</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-yellow-700 mb-2">Podem ser Perigosos:</h5>
                    <ul className="space-y-1 text-yellow-600">
                      <li>• MMS (dióxido de cloro) - TÓXICO</li>
                      <li>• Enemas de café</li>
                      <li>• Megadoses de vitaminas</li>
                      <li>• Medicamentos não prescritos</li>
                      <li>• Terapias invasivas não regulamentadas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">A Importância da Neurodiversidade</h3>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">🧠 Movimento da Neurodiversidade</h4>
                <p className="text-purple-700 mb-3">
                  Este movimento, liderado por pessoas com autismo, defende que:
                </p>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>O autismo é uma variação natural da neurologia humana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Pessoas com TEA têm direito à aceitação e respeito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>A sociedade deve se adaptar para incluir a diversidade neurológica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>O objetivo não é "normalizar", mas apoiar o desenvolvimento pleno</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Como Combater o Preconceito</h3>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-400">
                <h4 className="text-xl font-semibold text-teal-800 mb-4">💪 Estratégias Práticas:</h4>
                <ul className="space-y-2 text-teal-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Eduque-se:</strong> Conhecimento é a melhor arma contra o preconceito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Compartilhe informações corretas:</strong> Corrija mitos quando ouvir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Conte a história do seu filho:</strong> Humanize o autismo para outros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Apoie campanhas de conscientização:</strong> Abril Azul, por exemplo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Conecte-se com outros pais:</strong> União fortalece a causa</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "A verdade liberta. Quando conhecemos os fatos sobre o autismo, podemos tomar decisões melhores e criar um mundo mais inclusivo para nossos filhos."
                </p>
                <p className="text-gray-600">
                  Cada mito desfeito é um passo em direção a uma sociedade mais compreensiva e acolhedora.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  No próximo capítulo, vamos conhecer recursos valiosos e redes de apoio que podem ajudar sua família. 🤝
                </p>
              </div>
            </div>
          </div>
        )

      case 'chapter9':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Phone className="w-16 h-16 mx-auto text-cyan-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Capítulo 9</h1>
              <h2 className="text-2xl text-gray-600">Recursos e Apoio</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Você não está sozinho nesta jornada. Existem muitos recursos, organizações e redes de apoio disponíveis para ajudar sua família. Este capítulo reúne informações valiosas sobre onde buscar ajuda, conhecimento e suporte emocional.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Organizações e Associações Nacionais</h3>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    ABRA - Associação Brasileira para Ação por Direitos das Pessoas Autistas
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">O que oferece:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Defesa de direitos e políticas públicas</li>
                        <li>• Informações científicas atualizadas</li>
                        <li>• Orientação jurídica</li>
                        <li>• Campanhas de conscientização</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Como acessar:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Site: abraautismo.org.br</li>
                        <li>• Redes sociais ativas</li>
                        <li>• Eventos e palestras</li>
                        <li>• Material educativo gratuito</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    Movimento Orgulho Autista Brasil
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Foco:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Neurodiversidade e aceitação</li>
                        <li>• Voz das pessoas autistas</li>
                        <li>• Combate ao capacitismo</li>
                        <li>• Inclusão social</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Recursos:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Conteúdo educativo</li>
                        <li>• Grupos de apoio</li>
                        <li>• Eventos de conscientização</li>
                        <li>• Rede de ativistas</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    APAE - Associação de Pais e Amigos dos Excepcionais
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Serviços:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Atendimento multiprofissional</li>
                        <li>• Educação especializada</li>
                        <li>• Terapias diversas</li>
                        <li>• Apoio às famílias</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Presença:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Mais de 2.000 unidades no Brasil</li>
                        <li>• Atendimento gratuito pelo SUS</li>
                        <li>• Programas de inclusão</li>
                        <li>• Site: apae.com.br</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Recursos Online Confiáveis</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Sites Educativos
                  </h4>
                  <ul className="space-y-2 text-orange-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Canal Autismo:</strong> canalautismo.com.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Autismo e Realidade:</strong> autismoerealidade.org.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Instituto Neurosaber:</strong> neurosaber.com.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span><strong>Tismoo:</strong> tismoo.us (app e site)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-teal-800 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Canais no YouTube
                  </h4>
                  <ul className="space-y-2 text-teal-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span><strong>Canal Autismo:</strong> Informações científicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span><strong>Mundo Autista:</strong> Vivências e dicas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span><strong>Neurosaber:</strong> Conteúdo educativo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span><strong>Lagarta Vira Pupa:</strong> Perspectiva autista</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Livros Recomendados</h3>

              <div className="space-y-6">
                <div className="bg-pink-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-pink-800 mb-4">📚 Para Pais e Familiares</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-pink-700 mb-1">"O Reizinho Autista" - Gustavo Teixeira</h5>
                      <p className="text-pink-600">Guia prático para pais, com linguagem acessível e orientações baseadas em evidências.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-pink-700 mb-1">"Mundo Singular" - Ana Beatriz Barbosa Silva</h5>
                      <p className="text-pink-600">Entenda o autismo de forma clara e científica, com casos reais e orientações práticas.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-pink-700 mb-1">"Convivendo com Autismo e Síndrome de Asperger" - Chris Williams</h5>
                      <p className="text-pink-600">Estratégias práticas para o dia a dia, baseadas em experiências reais.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-indigo-800 mb-4">📖 Para Crianças e Adolescentes</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-indigo-700 mb-1">"Meu Irmão Tem Autismo" - Sophia Mendonça</h5>
                      <p className="text-indigo-600">Ajuda irmãos a entenderem o autismo de forma lúdica e amorosa.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-indigo-700 mb-1">"O Menino que Não Conseguia Parar Quieto" - Gustavo Teixeira</h5>
                      <p className="text-indigo-600">História que ajuda crianças a entenderem diferenças neurológicas.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-indigo-700 mb-1">"Diferentes Como Eu" - Jennifer Elder</h5>
                      <p className="text-indigo-600">Livro ilustrado que celebra a neurodiversidade.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Filmes e Documentários</h3>

              <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h4 className="text-xl font-semibold text-yellow-800 mb-4">🎬 Recomendações (com análise crítica)</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-700 mb-2">"Temple Grandin" (2010)</h5>
                    <p className="text-yellow-600 mb-2">Biografia da famosa cientista autista. Mostra potencial e desafios reais.</p>
                    <p className="text-yellow-500 text-sm"><strong>Nota:</strong> Lembre-se que nem todos os autistas são como Temple Grandin.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-700 mb-2">"Atypical" (Netflix)</h5>
                    <p className="text-yellow-600 mb-2">Série sobre adolescente autista. Aborda família, relacionamentos e independência.</p>
                    <p className="text-yellow-500 text-sm"><strong>Nota:</strong> Boa para entender dinâmicas familiares, mas é ficção.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-yellow-700 mb-2">"Vida Animada" (2016)</h5>
                    <p className="text-yellow-600 mb-2">Documentário sobre jovem que se comunica através de filmes da Disney.</p>
                    <p className="text-yellow-500 text-sm"><strong>Nota:</strong> Mostra como interesses especiais podem ser pontes para comunicação.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Aplicativos Úteis</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">📱 Comunicação e Aprendizado</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Proloquo2Go:</strong> Comunicação alternativa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>PECS IV+:</strong> Sistema de comunicação por figuras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>Tismoo:</strong> Rede social e recursos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span><strong>ABC Autismo:</strong> Atividades educativas</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">⏰ Organização e Rotina</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Choiceworks:</strong> Rotinas visuais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>First Then Visual Schedule:</strong> Sequências visuais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Time Timer:</strong> Timer visual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Social Stories Creator:</strong> Histórias sociais</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Grupos de Apoio e Redes Sociais</h3>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">👥 Onde Encontrar Apoio</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Facebook:</h5>
                    <ul className="space-y-1 text-purple-600">
                      <li>• "Autismo - Informação e Apoio"</li>
                      <li>• "Mães Azuis - Autismo"</li>
                      <li>• "Pais de Autistas Unidos"</li>
                      <li>• "Autismo - Amor Sem Limites"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">WhatsApp/Telegram:</h5>
                    <ul className="space-y-1 text-purple-600">
                      <li>• Grupos locais de pais</li>
                      <li>• Grupos por faixa etária</li>
                      <li>• Grupos de terapias específicas</li>
                      <li>• Redes de apoio regionais</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Profissionais Especializados</h3>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-400">
                <h4 className="text-xl font-semibold text-teal-800 mb-4">🔍 Como Encontrar Bons Profissionais</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-teal-700 mb-2">Onde Buscar Indicações:</h5>
                    <ul className="space-y-2 text-teal-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Outros pais de crianças com TEA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Associações locais de autismo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Pediatra ou neuropediatra</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Conselhos profissionais (CRP, CRFa, CREFITO)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-teal-700 mb-2">O que Verificar:</h5>
                    <ul className="space-y-2 text-teal-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Formação específica em TEA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Experiência comprovada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Abordagem baseada em evidências</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span>Boa comunicação com a família</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Recursos Financeiros e Apoio</h3>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
                <h4 className="text-xl font-semibold text-orange-800 mb-4">💰 Onde Buscar Ajuda Financeira</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-2">Programas Governamentais:</h5>
                    <ul className="space-y-1 text-orange-600">
                      <li>• BPC (Benefício de Prestação Continuada)</li>
                      <li>• Auxílio-inclusão</li>
                      <li>• Programas municipais de apoio</li>
                      <li>• Isenções fiscais</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-2">Organizações Privadas:</h5>
                    <ul className="space-y-1 text-orange-600">
                      <li>• Fundações e institutos</li>
                      <li>• Programas de responsabilidade social</li>
                      <li>• Crowdfunding para tratamentos</li>
                      <li>• Parcerias com universidades</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Contatos de Emergência e Apoio</h3>

              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-400">
                <h4 className="text-xl font-semibold text-red-800 mb-4">📞 Números Importantes</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-red-700 mb-1">Disque 100 - Direitos Humanos</h5>
                    <p className="text-red-600">Para denunciar violações de direitos de pessoas com deficiência</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-red-700 mb-1">135 - INSS</h5>
                    <p className="text-red-600">Para informações sobre benefícios sociais</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-red-700 mb-1">136 - Ouvidoria SUS</h5>
                    <p className="text-red-600">Para reclamações sobre atendimento na saúde pública</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-red-700 mb-1">CVV - 188</h5>
                    <p className="text-red-600">Apoio emocional 24h para momentos de crise</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Criando sua Rede de Apoio Local</h3>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">🤝 Dicas Práticas</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Conecte-se com outros pais:</strong> Na escola, terapias, consultas médicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Participe de eventos:</strong> Palestras, workshops, campanhas de conscientização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Crie grupos locais:</strong> WhatsApp, encontros presenciais, atividades conjuntas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Envolva a comunidade:</strong> Escola, vizinhança, grupos religiosos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Seja ativo:</strong> Participe, contribua, ajude outros pais iniciantes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "Uma rede de apoio forte não se constrói da noite para o dia, mas cada conexão que você faz pode ser transformadora para sua família."
                </p>
                <p className="text-gray-600">
                  Lembre-se: ao receber apoio hoje, você estará preparado para apoiar outras famílias amanhã.
                </p>
              </div>

              <div className="text-center py-6">
                <p className="text-lg font-medium text-gray-800">
                  Chegamos ao final desta jornada de conhecimento. Na conclusão, vamos refletir sobre tudo que aprendemos. 🌟
                </p>
              </div>
            </div>
          </div>
        )

      case 'conclusion':
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <Star className="w-16 h-16 mx-auto text-gold-500" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Conclusão</h1>
              <h2 className="text-2xl text-gray-600">Uma Jornada de Amor e Descobertas</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed">
                  Chegamos ao final desta jornada de conhecimento, mas na verdade, este é apenas o começo de uma nova fase em sua vida como pai, mãe ou cuidador de uma criança no espectro autista. Você agora possui ferramentas valiosas: informação, compreensão e, principalmente, esperança.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">O que Você Aprendeu</h3>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">🧠 Conhecimento Transformador</h4>
                <p className="text-blue-700 mb-4">
                  Ao longo deste guia, você descobriu que:
                </p>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>O autismo não é uma doença, mas uma forma diferente de ser e estar no mundo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Cada pessoa no espectro é única, com seus próprios talentos e desafios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>A intervenção precoce e o apoio adequado fazem toda a diferença</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Você tem direitos garantidos por lei e recursos disponíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Não existe "culpa" - o autismo tem origem neurobiológica</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Sua Jornada Única</h3>

              <p className="leading-relaxed">
                Cada família que convive com o autismo tem sua própria história, seus próprios desafios e suas próprias vitórias. Não compare sua jornada com a de outros - o que importa é o progresso do seu filho no seu próprio ritmo, com suas próprias conquistas.
              </p>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-800 mb-4">🌱 Lembre-se Sempre:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">💙</span>
                    <span><strong>Seu filho é perfeito do jeito que é.</strong> O autismo é parte de quem ele é, não algo que precisa ser "consertado".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">🌟</span>
                    <span><strong>Pequenos progressos são grandes vitórias.</strong> Celebre cada conquista, por menor que pareça.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">🤝</span>
                    <span><strong>Você não está sozinho.</strong> Existe uma comunidade inteira pronta para apoiá-lo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">💪</span>
                    <span><strong>Você é mais forte do que imagina.</strong> Sua dedicação e amor fazem toda a diferença.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">O Poder da Informação</h3>

              <p className="leading-relaxed">
                Quando você começou a ler este guia, talvez estivesse confuso, preocupado ou até mesmo assustado. Agora, você possui conhecimento que o empodera para tomar decisões informadas, buscar os recursos adequados e, principalmente, ser o melhor defensor do seu filho.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-400">
                <h4 className="text-xl font-semibold text-purple-800 mb-4">📚 A Informação Liberta Porque:</h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Reduz medos baseados em desconhecimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Permite que você faça escolhas conscientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Ajuda você a identificar profissionais competentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Capacita você a lutar pelos direitos do seu filho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Transforma você em fonte de apoio para outras famílias</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Olhando para o Futuro</h3>

              <p className="leading-relaxed">
                O futuro pode parecer incerto, mas uma coisa é certa: com amor, conhecimento e apoio adequado, seu filho pode alcançar seu máximo potencial. Não sabemos exatamente como será essa jornada, mas sabemos que será única e cheia de descobertas.
              </p>

              <div className="bg-teal-50 rounded-xl p-6 border-l-4 border-teal-400">
                <h4 className="text-xl font-semibold text-teal-800 mb-4">🔮 Perspectivas Esperançosas:</h4>
                <ul className="space-y-2 text-teal-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>A sociedade está se tornando mais inclusiva e compreensiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Novas terapias e abordagens surgem constantemente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>A tecnologia oferece ferramentas cada vez melhores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>Mais pessoas autistas estão assumindo papéis de liderança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span>O conceito de neurodiversidade ganha força</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Seus Próximos Passos</h3>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-400">
                <h4 className="text-xl font-semibold text-orange-800 mb-4">🚀 Plano de Ação:</h4>
                <ol className="space-y-3 text-orange-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">1.</span>
                    <span><strong>Continue aprendendo:</strong> O conhecimento sobre autismo evolui constantemente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">2.</span>
                    <span><strong>Construa sua rede:</strong> Conecte-se com outros pais, profissionais e organizações</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">3.</span>
                    <span><strong>Cuide de si mesmo:</strong> Você precisa estar bem para cuidar do seu filho</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">4.</span>
                    <span><strong>Seja um defensor:</strong> Lute pelos direitos do seu filho e de outras crianças</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">5.</span>
                    <span><strong>Compartilhe sua experiência:</strong> Ajude outras famílias que estão começando</span>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Uma Mensagem de Esperança</h3>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-gray-800 mb-4">
                  Há alguns anos, uma mãe me disse algo que nunca esqueci: <em>"Eu não teria escolhido o autismo para meu filho, mas não trocaria meu filho por nada neste mundo."</em>
                </p>
                <p className="leading-relaxed text-gray-700">
                  Essa frase resume perfeitamente a jornada que você está vivendo. Pode não ter sido o caminho que você planejou, mas é o caminho que vocês vão percorrer juntos, descobrindo belezas e possibilidades que talvez nunca imaginassem existir.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800">Palavras Finais</h3>

              <p className="leading-relaxed">
                Este guia termina aqui, mas sua jornada continua. Você agora faz parte de uma comunidade global de famílias que compartilham experiências similares, uma comunidade unida pelo amor incondicional e pela determinação de criar um mundo melhor para nossos filhos.
              </p>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">🌈 Lembre-se Sempre:</h4>
                <p className="text-xl leading-relaxed text-gray-800 mb-4">
                  "Seu filho não é definido pelo autismo. Ele é definido pelo amor que recebe, pelas oportunidades que lhe são oferecidas e pelo potencial infinito que carrega dentro de si."
                </p>
                <p className="text-lg text-gray-600">
                  Você tem tudo o que precisa para ser o melhor pai, mãe ou cuidador que seu filho poderia ter.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center">
                <h4 className="text-xl font-semibold text-emerald-800 mb-4">💙 Uma Última Reflexão</h4>
                <p className="text-lg leading-relaxed text-emerald-700 mb-4">
                  O autismo trouxe desafios para sua família, mas também trouxe presentes únicos: uma perspectiva diferente do mundo, uma sensibilidade especial, uma forma única de amar e ser amado.
                </p>
                <p className="text-emerald-600">
                  Celebre esses presentes. Eles fazem parte da beleza da neurodiversidade humana.
                </p>
              </div>

              <div className="text-center py-8 space-y-4">
                <p className="text-2xl font-bold text-gray-800">
                  Obrigado por fazer parte desta jornada. 💙
                </p>
                <p className="text-lg text-gray-600">
                  Que este conhecimento seja transformador para você e sua família.
                </p>
                <p className="text-lg text-gray-600">
                  Que vocês encontrem alegria, crescimento e muito amor no caminho à frente.
                </p>
                
                <div className="pt-8">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    "Com amor, informação e esperança, tudo é possível."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return <div>Conteúdo não encontrado</div>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Entendendo o Autismo</h1>
                <p className="text-sm text-gray-600">Um Guia para Pais e Cuidadores</p>
              </div>
            </div>
            
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FileText className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-8">
        {/* Sidebar */}
        <aside className={`${showMenu ? 'block' : 'hidden'} lg:block w-80 flex-shrink-0`}>
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Índice</h2>
            <nav className="space-y-2">
              {chapters.map((chapter, index) => {
                const Icon = chapter.icon
                return (
                  <button
                    key={chapter.id}
                    onClick={() => goToChapter(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                      currentChapter === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{chapter.title}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            {renderContent()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevChapter}
              disabled={currentChapter === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentChapter === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                {currentChapter + 1} de {chapters.length}
              </p>
              <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
                <div
                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={nextChapter}
              disabled={currentChapter === chapters.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentChapter === chapters.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
              }`}
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}