import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { url } from "../../react-router-config/routesConfig";
import { decrement, increment, reset } from "../../Redux/Reducers/counterSlice";

export default function Home() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    
                </div>
                <div className="mx-auto max-w-2xl pb-32 sm:pb-48 lg:pb-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{" "}
                            <Link to={url.public_url.about} className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Data to enrich your online business
                        </h1>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to={url.public_url.register}
                                style={{ backgroundColor: 'rgb(31 41 55)' }}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sing Up
                            </Link>
                            <Link to={url.public_url.login} className="text-sm font-semibold leading-6 text-gray-900">
                                Sing In <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
                            aliqua.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                onClick={() => dispatch(decrement())}
                                style={{ backgroundColor: 'rgb(31 41 55)' }}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                <span aria-hidden="true">←</span> Decrement
                            </button>
                            {count}
                            <button
                                onClick={() => dispatch(increment())}
                                className="text-sm font-semibold leading-6 text-gray-900">
                                Increment <span aria-hidden="true">→</span>
                            </button>
                            <button
                                style={{ backgroundColor: 'rgb(31 41 55)' }}
                                onClick={() => dispatch(reset())}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}