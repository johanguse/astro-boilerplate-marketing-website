import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureTabs() {
  return (
    <Tabs defaultValue="documents" className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto">
        <TabsTrigger value="documents" className="py-4 text-base">
          📄 Document Intelligence
        </TabsTrigger>
        <TabsTrigger value="content" className="py-4 text-base">
          ✍️ Content Generation
        </TabsTrigger>
        <TabsTrigger value="analytics" className="py-4 text-base">
          📊 AI Analytics
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="documents" className="mt-8">
        <Card className="border-2 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">AI Document Intelligence</CardTitle>
            <CardDescription className="text-lg">
              Transform how you work with documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Key Capabilities</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span>Upload and process PDF, DOCX, and TXT files with AI-powered extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span>Automatic summarization and key points extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span>Semantic search using embeddings for precise information retrieval</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span>Chat with documents using RAG (Retrieval Augmented Generation)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <span>Document library with full search and organization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Use Cases</h4>
              <p className="text-muted-foreground">
                Perfect for legal document review, research paper analysis, contract intelligence, 
                compliance checking, and knowledge base creation.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="content" className="mt-8">
        <Card className="border-2 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">AI Content Generation</CardTitle>
            <CardDescription className="text-lg">
              Create high-quality content in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Content Types</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-xl">
                  <h5 className="font-semibold mb-2">📝 Blog Posts</h5>
                  <p className="text-sm text-muted-foreground">SEO-optimized articles with customizable tone and style</p>
                </div>
                <div className="p-4 border rounded-xl">
                  <h5 className="font-semibold mb-2">📧 Marketing Emails</h5>
                  <p className="text-sm text-muted-foreground">Compelling email campaigns with A/B testing suggestions</p>
                </div>
                <div className="p-4 border rounded-xl">
                  <h5 className="font-semibold mb-2">📱 Social Media</h5>
                  <p className="text-sm text-muted-foreground">Engaging posts with hashtag optimization</p>
                </div>
                <div className="p-4 border rounded-xl">
                  <h5 className="font-semibold mb-2">🛍️ Product Descriptions</h5>
                  <p className="text-sm text-muted-foreground">Persuasive copy that converts</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Customization Options</h4>
              <p className="text-muted-foreground">
                Control tone (professional, casual, friendly), style (informative, persuasive, entertaining), 
                length, and target audience for perfect results every time.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="analytics" className="mt-8">
        <Card className="border-2 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">AI Analytics</CardTitle>
            <CardDescription className="text-lg">
              Turn questions into insights instantly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Natural Language Queries</h4>
              <div className="space-y-3">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm font-mono text-primary mb-2">"Show me user growth over the last 30 days"</p>
                  <p className="text-xs text-muted-foreground">→ Generates line chart with daily user registrations</p>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm font-mono text-primary mb-2">"Which features are most used by paying customers?"</p>
                  <p className="text-xs text-muted-foreground">→ Creates bar chart with feature usage breakdown</p>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm font-mono text-primary mb-2">"Predict revenue for next quarter based on trends"</p>
                  <p className="text-xs text-muted-foreground">→ Generates forecast chart with confidence intervals</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">Safety & Security</h4>
              <p className="text-muted-foreground">
                All queries are validated for safety before execution. No destructive operations allowed. 
                Data access is controlled by your existing RBAC permissions.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
