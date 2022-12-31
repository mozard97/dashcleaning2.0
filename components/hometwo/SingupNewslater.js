import { useState } from "react"

export default function SingupNewslater() {
    const [form, setForm] = useState(
        {
            email: "",
            zipCode: ""
        }
    )
    const [loading, setLoading] = useState(false);
    const [msz, setMsz] = useState("Signup")
    return (
        <div className=" py-6 px-4 sm:px-6  lg:px-8">
            <div className="rounded-md shadow border border-gray-200 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">
                <div className="w-full">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl max-w-sm">Get <span className="text-indigo-600">the latest deals and promotions </span> sent straight to your inbox</h2>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8 w-full">
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true)
                        await fetch("/api/home/signup-newslater", {
                            method: "POST",
                            body: JSON.stringify(form),
                            headers: { "Content-Type": "applications/json" }
                        }).then((res) => res.json())
                            .then(data => {
                                if (data?.save?._id) {
                                    setMsz("Success")
                                    setLoading(false)
                                } else {
                                    setMsz("Failed")
                                    setLoading(false)
                                }
                            })
                            .catch(e => { console.log(e); setMsz("Failed") })
                    }} className="flex flex-col gap-4">
                        {msz !== ("Success" || "Failed") && <div className="sm:flex gap-4">
                            <input
                                id="email-address"
                                name="email-address"
                                value={form.email}
                                onChange={(e) => setForm({ email: e.target.value, zipCode: form.zipCode })}
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
                                placeholder="Enter your email"
                            />
                            <input
                                id="zip-code"
                                name="zip-code"
                                value={form.zipCode}
                                onChange={(e) => setForm({ zipCode: e.target.value, email: form.email })}
                                type="zip"
                                autoComplete="zip"
                                required
                                className="w-full sm:mt-0 mt-2 rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
                                placeholder="Enter your zip code (optional)"
                            />
                        </div>}
                        <div className="mt-3 rounded-md sm:mt-0 sm:flex-shrink-0">
                            <button
                                type="submit"
                                disabled={loading || msz == "Success" || msz == "Failed"}
                                className={`${msz == "Success" ? "bg-green-600" : msz == "Failed" ? "bg-red-600" : "bg-indigo-600"} flex items-center justify-center rounded-md border border-transparent py-3 px-5 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                            >
                                {loading ? <span className="animate-pulse">Loading..</span> : msz}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
