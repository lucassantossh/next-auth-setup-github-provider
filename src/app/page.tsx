import Dashboard from './components/Dashboard'

export default async function Home() {
  return (
    <main className='my-8 mx-24 rounded-lg bg-slate-950 py-12'>
      <div className='border-b pb-1'>
        <h1 className='text-4xl text-blue-700 text-center font-bold'>
          Página inicial e pública do website!
        </h1>
      </div>
      <div className='py-12 px-4'>
        <Dashboard />
      </div>
    </main>
  )
}
