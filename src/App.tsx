/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Lock, Eye, FileText, Server, ExternalLink } from 'lucide-react';

export default function App() {
  const [currentDate, setCurrentDate] = React.useState('');

  React.useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      setCurrentDate(formatted);
    };

    updateDate();
    // Update every minute to keep it fresh if the user keeps the tab open
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-slate-600">
            n8n.servidorlimacorp.online
          </p>
        </header>

        <main className="space-y-12">
          
          {/* Introduction */}
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <p className="leading-relaxed text-slate-600 mb-6">
              A sua privacidade é importante para nós. É política do <span className="font-semibold text-slate-900">n8n.servidorlimacorp.online</span> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://n8n.servidorlimacorp.online/" className="text-indigo-600 hover:text-indigo-800 underline decoration-indigo-200 underline-offset-2 transition-colors">n8n.servidorlimacorp.online</a>, e outros sites que possuímos e operamos.
            </p>
            <p className="leading-relaxed text-slate-600 mb-6">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="leading-relaxed text-slate-600">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>

          {/* Key Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-5 h-5 text-emerald-500" />
                <h3 className="font-semibold text-slate-900">Compartilhamento</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-slate-900">Links Externos</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                O nosso site pode ter links para sites externos. Não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
              </p>
            </div>
          </div>

          {/* Cookies & Ads */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-slate-400" />
              Publicidade e Cookies
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600">
              <ul className="list-none space-y-4 pl-0">
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-indigo-500"></span>
                  <span>O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-indigo-500"></span>
                  <span>Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-indigo-500"></span>
                  <span>Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-indigo-500"></span>
                  <span>Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Commitment */}
          <section className="bg-slate-900 text-slate-200 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-indigo-400" />
              Compromisso do Usuário
            </h2>
            <p className="mb-6 text-slate-300">
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o n8n.servidorlimacorp.online oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-mono text-indigo-400 font-bold">A)</span>
                <span>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-indigo-400 font-bold">B)</span>
                <span>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-indigo-400 font-bold">C)</span>
                <span>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do n8n.servidorlimacorp.online, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
              </li>
            </ul>
          </section>

          {/* Footer / More Info */}
          <section className="border-t border-slate-200 pt-12">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Mais informações</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 bg-slate-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 md:mb-0">
                <FileText className="w-4 h-4" />
                <span>Esta política é efetiva a partir de:</span>
              </div>
              <span className="font-mono font-medium text-slate-700">
                {currentDate}
              </span>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
