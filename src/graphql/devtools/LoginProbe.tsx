import { useLoginMutation } from "../generated/urql";

export default function LoginProbe() {
  const [result, execute] = useLoginMutation();

  async function loginValid() {
    await execute({ email: "tester@parkapp.pl", password: "123$TesT$321" });
  }
  async function loginInvalid() {
    await execute({ email: "wrong@example.com", password: "wrong" });
  }

  return (
    <div className="p-4 border rounded-lg m-4">
      <div className="mb-2 text-sm">fetching: {String(result.fetching)}</div>
      {result.error && <div className="text-red-600 text-sm">Error: {result.error.message}</div>}
      {result.data && <div className="text-green-700 text-sm">Token: {result.data.login.token}</div>}
      <div className="flex gap-2 mt-2">
        <button className="px-3 py-1 rounded bg-black/90 text-white" onClick={loginValid}>Login (valid)</button>
        <button className="px-3 py-1 rounded bg-gray-200" onClick={loginInvalid}>Login (invalid)</button>
      </div>
    </div>
  );
}
