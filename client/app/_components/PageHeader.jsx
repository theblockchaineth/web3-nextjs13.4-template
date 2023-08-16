export default function PageHeader(props) {

    return (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-marker tracking-tight sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{props.title}</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-200/20 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            {props.subtitle}
          </p>
        </div>
      </section>
    )
}