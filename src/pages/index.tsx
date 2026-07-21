import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
    return (
        <Layout title="Hallscloud Handbook" description="Living documentation for hallscloud.org">
            <main className="home-shell">
                <section className="hero-card">
                    <p className="eyebrow">Halls Kitchen Handbook</p>
                    <h2>Operational docs for Halls Kitchen.</h2>
                    <p className="hero-copy">
                        This handbook is for guides, policies, and kitchen workflows.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button--primary" to="/docs/employee-handbook">
                            Read the handbook
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}