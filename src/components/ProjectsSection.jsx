import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Natori – Premium Clothing Brand",
    description:
      "Full Shopify setup from scratch to live. & Worked on refining color swatches for product pages, developed a static block linked to the Rewards page, resolved UX issues, and improved site layout for smoother customer interaction.",
    image: "/projects/natori.png",
    tags: ["Shopify", "Liquid", "UX", "Frontend"],
    demoUrl: "https://www.natori.com",
  },
  {
    id: 2,
    title: "Miller Rocks – Automation Project",
    description:
      "Built backend automation flow using n8n: FTP → XML → CSV → Shopify Order Import. Deployed on Azure with HTTPS support and automated scheduling.",
    image: "/projects/millerrocks.png",
    tags: ["Shopify", "Automation", "n8n", "Azure"],
    demoUrl: "https://miller-rock.myshopify.com",
  },
  {
    id: 3,
    title: "BeMinimum – Clothing & Lifestyle Brand",
    description:
      "Implemented custom theme enhancements for fashion products. Improved product page layouts with size guides, variant selectors, and styled collection pages.",
    image: "/projects/beminimum.png",
    tags: ["Shopify", "Liquid", "Theme Customization"],
    demoUrl: "https://beminimum.com",
  },
  {
    id: 4,
    title: "Vishal Peripherals – Electronics & PC Store",
    description:
      "Full Shopify setup from scratch to live. Built a custom PC Builder page with compatibility filters, mega menu with grandchild links, multiple CMS pages (About, Awards, Media, Policies), Shiprocket integration, and n8n automation for FTP → Shopify product sync.",
    image: "/projects/vishalperipherals.png",
    tags: ["Shopify", "Liquid", "JavaScript", "n8n", "Automation"],
    demoUrl: "https://vishalperipherals.com",
  },
  {
    id: 5,
    title: "District Camera – Camera & Electronics Store",
    description:
      "Customized Shopify Dawn theme, added custom scripts for UI (dealer login handling, input field rearrangement, section toggling), and performed mobile responsiveness and CMS improvements.",
    image: "/projects/DC.png",
    tags: ["Shopify", "Liquid", "JavaScript", "Theme Customization"],
    demoUrl: "https://www.districtcamera.com",
  },
  {
    id: 6,
    title: "American Flame Monitoring – Industrial Brand",
    description:
      "Enhanced CMS pages with accordions, tables, hero banners, and brand sections. Improved responsive design and organized content layout for better UI/UX.",
    image: "/projects/Americanflame.png",
    tags: ["Shopify", "Liquid", "CMS Customization"],
    demoUrl: "https://www.americanflamemonitoring.com",
  },
  {
    id: 7,
    title: "3DXTech – 3D Printing Materials",
    description:
      "Improved site functionality by refining checkout, cart, and payment pages. Ensured smooth flow from product selection to checkout for better customer experience.",
    image: "/projects/3dx.png",
    tags: ["Shopify", "Liquid", "Checkout Customization"],
    demoUrl: "https://www.3dxtech.com",
  },
  {
    id: 8,
    title: "IdeelArt – Contemporary Art Gallery",
    description:
      "Enhanced Shopify frontend, optimized theme, fixed bugs, and customized page layouts. Assisted with pre-launch optimization.",
    image: "/projects/ideelart.png",
    tags: ["Shopify", "Liquid", "Frontend"],
    demoUrl: "https://www.ideelart.com",
  },
];



export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
