import { CheckIcon } from 'heroicons2/24/outline'

export default function MarvPro({ marv_pro }) {

    return (
        <div className="bg-white">
            <div className=" mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-10 lg:px-8 lg:shadow lg:rounded-sm border-b lg:border border-gray-50">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why MarvCleaning?</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
                        See why MarvCleaning is best choice for your Home needs.
                    </p>
                </div>
                <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                    {marv_pro?.map((value) => (
                        <div key={value._key} className="relative shadow border border-gray-200 p-4 rounded-md">
                            <dt>
                                <CheckIcon className="absolute mt-1 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{value.title}</p>
                            </dt>
                            <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
