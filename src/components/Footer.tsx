import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo  />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#beneficios">Benefícios</NavLink>
              <NavLink href="#resultados">Resultados reais</NavLink>
              <NavLink href="#produtos">Produtos</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 justify-center">
        
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} RD Comércio e Serviços Hospitalares. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
