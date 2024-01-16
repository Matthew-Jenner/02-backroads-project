import { pageLinks } from "../data";

function PageLinks({ parentClass, itemClass }) {
	return (
		<ul
			className={parentClass}
			id="nay-links">
			{pageLinks.map((link) => {
				return (
					<PageLink key={link.id} link={link} itemClass={itemClass}/>
				);
			})}
		</ul>
	);
}

export default PageLinks;
