"use client";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, StarIcon } from '@heroicons/react/20/solid'

const filters = {
  gender: [
    { value: 'M', label: 'Male', checked: false },
    { value: 'F', label: 'Female', checked: false },
  ],
  clique: [
    { value: 'Goths', label: 'Goths', checked: false },
    { value: 'Preppy', label: 'Preppy', checked: false },
    { value: 'Nerds', label: 'Nerds', checked: true },
    { value: 'Farmers', label: 'Farmers', checked: false },
    { value: 'Corporates', label: 'Corporates', checked: false },
  ],
  physique: [
    { value: 'Slim', label: 'Slim', checked: false },
    { value: 'Average', label: 'Average', checked: true },
    { value: 'Athletic', label: 'Athletic', checked: false },
    { value: 'Large', label: 'Large', checked: false },
  ],
  mentality: [
    { value: 'Hopeful', label: 'Hopeful', checked: false },
    { value: 'Hero', label: 'Hero', checked: false },
    { value: 'Anxious', label: 'Anxious', checked: false },
    { value: 'Indifferent', label: 'Indifferent', checked: false },
  ],
}
const sortOptions = [
  { name: 'Ascending', href: '#', current: true },
  { name: 'Descending', href: '#', current: false },
]
const products = [
  {
    id: 1,
    name: 'The Pariah: #1',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'The Pariah: #2',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'The Pariah: #3',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'The Pariah: #4',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 5,
    name: 'The Pariah: #5',
    price: '$149',
    rating: 5,
    reviewCount: 38,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 6,
    name: 'The Pariah: #6',
    price: '$15',
    rating: 5,
    reviewCount: 18,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 7,
    name: 'The Pariah: #7',
    price: '$15',
    rating: 5,
    reviewCount: 14,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 8,
    name: 'The Pariah: #8',
    price: '$15',
    rating: 4,
    reviewCount: 21,
    imageSrc: '/Holding.png',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CollectionGrid() {

    return (
        <main className="pb-24">
        <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-marker tracking-widest">Explore the Collection</h1>
        </div>

        {/* Filters */}
        <Disclosure
          as="section"
          aria-labelledby="filter-heading"
          className="grid items-center border-b border-t"
        >
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          <div className="relative col-start-1 row-start-1 py-4 bg-red-900/40">
            <div className="mx-auto flex max-w-7xl space-x-6 divide-x px-4 text-sm sm:px-6 lg:px-8">
              <div>
                <Disclosure.Button className="group flex items-center font-medium ">
                  <FunnelIcon
                    className="mr-2 h-5 w-5 flex-none"
                    aria-hidden="true"
                  />
                  2 Filters
                </Disclosure.Button>
              </div>
              <div className="pl-6">
                <button type="button" className="">
                  Clear all
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="border-t py-10">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Gender</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.gender.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`gender-${optionIdx}`}
                          name="gender[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded"
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`gender-${optionIdx}`} className="ml-3 min-w-0 flex-1">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Clique</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.clique.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`clique-${optionIdx}`}
                          name="clique[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded "
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`clique-${optionIdx}`} className="ml-3 min-w-0 flex-1">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">Physique</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.physique.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`physique-${optionIdx}`}
                          name="physique[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded "
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`physique-${optionIdx}`} className="ml-3 min-w-0 flex-1">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block font-medium">Mentality</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {filters.mentality.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`mentality-${optionIdx}`}
                          name="mentality[]"
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded "
                          defaultChecked={option.checked}
                        />
                        <label htmlFor={`mentality-${optionIdx}`} className="ml-3 min-w-0 flex-1 ">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </Disclosure.Panel>
          <div className="col-start-1 row-start-1 py-4">
            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
              <Menu as="div" className="relative inline-block">
                <div className="flex">
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium ">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 "
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-md bg-black text-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-white hover:text-white hover:bg-black' : 'text-gray-500 hover:bg-pink-600 hover:text-white',
                                active ? 'text-black' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </Disclosure>

        {/* Product grid */}
        <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
          <div className="-mx-px grid grid-cols-2 border-l sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="group relative border-b border-r p-4 sm:p-6">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="pb-4 pt-10 text-center">
                  <h3 className="text-sm font-medium ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <nav
          aria-label="Pagination"
          className="mx-auto mt-6 flex max-w-7xl justify-between px-4 text-sm font-medium sm:px-6 lg:px-8"
        >
          <div className="min-w-0 flex-1">
            <a
              href="#"
              className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-black hover:bg-white hover:text-black px-4 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
            >
              Previous
            </a>
          </div>
          <div className="hidden space-x-2 sm:flex">
            
          </div>
          <div className="flex min-w-0 flex-1 justify-end">
            <a
              href="#"
              className="inline-flex h-10 items-center rounded-md border border-gray-300 bg-black hover:bg-white hover:text-black px-4 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-indigo-600"
            >
              Next
            </a>
          </div>
        </nav>
      </main>
    )
    }