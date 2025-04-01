import { SimpleAccordion } from "./SimpleAccordion";

export default function Preview() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
        <SimpleAccordion
          items={[
            {
              title: "What is your return policy?",
              content:
                "We offer a 30-day return policy for all unused items in their original packaging. Shipping costs are the responsibility of the customer.",
            },
            {
              title: "How do I track my order?",
              content:
                "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the shipping carrier's website.",
            },
            {
              title: "Do you ship internationally?",
              content:
                "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping calculator for specific rates.",
            },
          ]}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">With Custom Styling</h2>
        <SimpleAccordion
          items={[
            {
              title: "Custom Styled Item",
              content:
                "This accordion item has custom styling applied through the classNames prop.",
            },
            {
              title: "Another Custom Item",
              content: "Notice the different styling on the title and content.",
            },
          ]}
          classNames={{
            root: "max-w-2xl mx-auto",
            item: "border-gray-200",
            button: "hover:text-blue-600",
            title: "text-lg font-medium",
            content: "text-gray-600",
          }}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">With Rich Content</h2>
        <SimpleAccordion
          items={[
            {
              title: (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Active Project</span>
                </div>
              ),
              content: (
                <div className="space-y-4">
                  <p>
                    This is a more complex content example with multiple
                    elements.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>First item</li>
                    <li>Second item</li>
                    <li>Third item</li>
                  </ul>
                </div>
              ),
            },
            {
              title: (
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>Pending Review</span>
                </div>
              ),
              content: (
                <div className="space-y-4">
                  <p>Another example with rich content and custom styling.</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">Status:</p>
                    <p className="text-sm text-gray-600">Awaiting approval</p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
