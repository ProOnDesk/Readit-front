import EmailConfirmation from "../_components/emailConfirmation/EmailConfirmation";

export default function Page({
	searchParams,
}: {
	searchParams: { key: string };
}) {
	console.log("searchParams.key:", searchParams.key); // Ten log pojawi się na serwerze (node.js)

	return (
		<div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] w-full flex justify-center items-center px-4 sm400:px-10 sm500:px-20 bg-whiteSecond">
			<EmailConfirmation keyValue={searchParams.key} />{" "}
			{/* Przekazywanie dynamicznego `key` */}
		</div>
	);
}
