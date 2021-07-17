import Image from "next/image";

export default function HeaderMain() {
  return (
    <>
      <aside className="aside">
        <div className="profileItens">
          <section>
            <div className="profileImage">
              <Image
                alt="Photo Profile"
                height={96}
                src="/img/profile.jpg"
                width={96}
              />
            </div>
            <div>
              <h3>
                <span>Fábio Vitor</span>
              </h3>
              <p>Desenvolvedor Full Stack</p>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}