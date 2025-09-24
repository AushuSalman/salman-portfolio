import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">
              Passionate Shopify Developer
            </h3>

            <p className="text-muted-foreground">
              With 4 years of hands-on experience in Shopify theme development,
              customization, and store setup, I specialize in creating engaging,
              user-friendly, and conversion-focused eCommerce experiences. I
              have worked on custom theme coding, liquid templating, metafields,
              app integrations, and advanced frontend features to deliver
              tailored solutions for diverse business needs.
            </p>

            <p className="text-muted-foreground">
              I excel at building responsive storefronts, optimizing site
              performance, and implementing custom features such as mega menus,
              product filtering, dynamic sections, and third-party API
              integrations. Beyond development, I focus on enhancing customer
              journeys through intuitive UX and seamless functionality, ensuring
              every project drives measurable business growth.
            </p>

            {/* Left-aligned buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/11sTbZrZO8phXNnqJQmS7v5g0GPxwZZca/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Shopify Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building customized Shopify stores with Liquid, HTML, CSS,
                    and JavaScript, tailored to meet unique business needs. From
                    theme customization to app integration, I deliver responsive
                    and scalable eCommerce solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Storefront Design (UI/UX)
                  </h4>
                  <p className="text-muted-foreground">
                    Designing engaging and conversion-focused storefronts that
                    enhance the shopping experience. I specialize in intuitive
                    navigation, mega menus, product filtering, and responsive
                    layouts to boost customer engagement and sales.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Shopify Store Management
                  </h4>
                  <p className="text-muted-foreground">
                    Managing Shopify projects end-to-end — from store setup and
                    configuration to third-party app integration and performance
                    optimization. Skilled in ensuring smooth operations with SEO
                    best practices, payment gateways, and inventory workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
