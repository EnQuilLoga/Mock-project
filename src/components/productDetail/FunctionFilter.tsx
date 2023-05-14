import { Link } from "react-router-dom";
import { renderCheckboxType, renderTagType } from "./Interface";

export function renderCheckbox({
  label,
  data,
  name,
  inStock,
  onChange,
}: renderCheckboxType) {
  return (
    <>
      <div className="mb-8">
        <form>
          <h2>{label}</h2>
          {data &&
            data.map((item) => (
              <div key={item.value || item.label}>
                <input
                  id={`${name} + 'id'`}
                  type="checkbox"
                  name={name}
                  value={item.value}
                  className={`rounded  bg-${item.value}-500 cursor-pointer `}
                  onChange={onChange}
                />
                <label
                  htmlFor={`${name} + 'id'`}
                  className="ml-2 hover:text-red-400 cursor-pointer"
                >
                  {item.label} ({inStock})
                </label>
              </div>
            ))}
        </form>
      </div>
    </>
  );
}

export function renderTag({ data }: renderTagType) {
  return (
    <>
      <div>
        <p className="border-b-2 border-stone-200 mb-3 pb-2">Tags</p>
        {data &&
          data.map((tag) => (
            <Link
              to="#"
              key={tag.value}
              className="rounded-full inline-block hover:bg-red-600 hover:text-white py-1 px-2 m-1 bg-stone-200 "
            >
              {tag.value}
            </Link>
          ))}
      </div>
    </>
  );
}
