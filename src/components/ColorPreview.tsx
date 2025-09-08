import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ColorSwatchProps {
  name: string;
  color: string;
  className: string;
  description?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, color, className, description }) => (
  <div className="flex flex-col space-y-2">
    <div className={`w-16 h-16 rounded-lg border border-border ${className}`}></div>
    <div className="text-center">
      <p className="text-sm font-medium text-text-primary">{name}</p>
      <p className="text-xs text-text-secondary">{color}</p>
      {description && <p className="text-xs text-text-tertiary mt-1">{description}</p>}
    </div>
  </div>
);

export const ColorPreview: React.FC = () => {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">MigoLoop Color System</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A comprehensive color system designed for software consulting services, 
          featuring our signature gold (#fcbe11) and professional gray (#343434) palette.
        </p>
      </div>

      {/* Primary Colors */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-primary">Primary Colors - Brand Gold</CardTitle>
          <p className="text-text-secondary">
            Our signature gold represents innovation, progress, value, and expertise.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
            <ColorSwatch name="50" color="#fef7e0" className="bg-primary-50" description="Very Light" />
            <ColorSwatch name="100" color="#fdeec1" className="bg-primary-100" description="Light" />
            <ColorSwatch name="200" color="#fbe4a3" className="bg-primary-200" description="Medium Light" />
            <ColorSwatch name="300" color="#f9da85" className="bg-primary-300" description="Medium" />
            <ColorSwatch name="400" color="#f7d067" className="bg-primary-400" description="Medium Dark" />
            <ColorSwatch name="500" color="#fcbe11" className="bg-primary" description="Main Brand" />
            <ColorSwatch name="600" color="#f5c649" className="bg-primary-600" description="Darker" />
            <ColorSwatch name="700" color="#f3bc2b" className="bg-primary-700" description="Dark" />
            <ColorSwatch name="800" color="#f1b20d" className="bg-primary-800" description="Very Dark" />
            <ColorSwatch name="900" color="#efa800" className="bg-primary-900" description="Darkest" />
          </div>
        </CardContent>
      </Card>

      {/* Secondary Colors */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-secondary">Secondary Colors - Brand Gray</CardTitle>
          <p className="text-text-secondary">
            Professional dark gray represents stability, trust, and credibility.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
            <ColorSwatch name="50" color="#f2f2f2" className="bg-secondary-50" description="Very Light" />
            <ColorSwatch name="100" color="#e6e6e6" className="bg-secondary-100" description="Light" />
            <ColorSwatch name="200" color="#cccccc" className="bg-secondary-200" description="Medium Light" />
            <ColorSwatch name="300" color="#b3b3b3" className="bg-secondary-300" description="Medium" />
            <ColorSwatch name="400" color="#999999" className="bg-secondary-400" description="Medium Dark" />
            <ColorSwatch name="500" color="#343434" className="bg-secondary" description="Main Brand" />
            <ColorSwatch name="600" color="#666666" className="bg-secondary-600" description="Darker" />
            <ColorSwatch name="700" color="#4d4d4d" className="bg-secondary-700" description="Dark" />
            <ColorSwatch name="800" color="#404040" className="bg-secondary-800" description="Very Dark" />
            <ColorSwatch name="900" color="#262626" className="bg-secondary-900" description="Darkest" />
          </div>
        </CardContent>
      </Card>

      {/* Accent Colors */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-accent-blue">Accent Colors</CardTitle>
          <p className="text-text-secondary">
            Technology-focused colors for software development themes and special elements.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-blue">Technology Blue</h3>
              <div className="grid grid-cols-2 gap-4">
                <ColorSwatch name="Blue" color="#3b82f6" className="bg-accent-blue" description="Main" />
                <ColorSwatch name="Blue Light" color="#dbeafe" className="bg-accent-blue-light" description="Light" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-green">Success Green</h3>
              <div className="grid grid-cols-2 gap-4">
                <ColorSwatch name="Green" color="#16a34a" className="bg-accent-green" description="Main" />
                <ColorSwatch name="Green Light" color="#dcfce7" className="bg-accent-green-light" description="Light" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-accent-purple">Innovation Purple</h3>
              <div className="grid grid-cols-2 gap-4">
                <ColorSwatch name="Purple" color="#8b5cf6" className="bg-accent-purple" description="Main" />
                <ColorSwatch name="Purple Light" color="#ede9fe" className="bg-accent-purple-light" description="Light" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Semantic Colors */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-text-primary">Semantic Colors</CardTitle>
          <p className="text-text-secondary">
            Clear status and feedback indicators for user interface elements.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-success">Success</h3>
              <div className="space-y-3">
                <ColorSwatch name="Success" color="#16a34a" className="bg-success" description="Main" />
                <ColorSwatch name="Success Light" color="#dcfce7" className="bg-success-light" description="Background" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-warning">Warning</h3>
              <div className="space-y-3">
                <ColorSwatch name="Warning" color="#f59e0b" className="bg-warning" description="Main" />
                <ColorSwatch name="Warning Light" color="#fef3c7" className="bg-warning-light" description="Background" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-error">Error</h3>
              <div className="space-y-3">
                <ColorSwatch name="Error" color="#ef4444" className="bg-error" description="Main" />
                <ColorSwatch name="Error Light" color="#fee2e2" className="bg-error-light" description="Background" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-info">Info</h3>
              <div className="space-y-3">
                <ColorSwatch name="Info" color="#3b82f6" className="bg-info" description="Main" />
                <ColorSwatch name="Info Light" color="#dbeafe" className="bg-info-light" description="Background" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Neutral Colors */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-text-primary">Neutral Colors</CardTitle>
          <p className="text-text-secondary">
            Professional backgrounds and readable text colors for consistent layouts.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Backgrounds</h3>
              <div className="grid grid-cols-3 gap-4">
                <ColorSwatch name="Background" color="#ffffff" className="bg-background border border-border" description="Main" />
                <ColorSwatch name="Secondary" color="#fafafa" className="bg-bg-secondary border border-border" description="Secondary" />
                <ColorSwatch name="Tertiary" color="#f5f5f5" className="bg-bg-tertiary border border-border" description="Tertiary" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Text Colors</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background border border-border rounded">
                  <p className="text-text-primary font-medium">Primary Text</p>
                  <p className="text-text-secondary">Secondary Text</p>
                  <p className="text-text-tertiary">Tertiary Text</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card className="bg-bg-secondary border-border-accent">
        <CardHeader>
          <CardTitle className="text-primary">Usage Examples</CardTitle>
          <p className="text-text-secondary">
            Practical examples of how to use the color system in your components.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Buttons</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary hover:bg-primary-600 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-secondary hover:bg-secondary-600 text-secondary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                  Secondary Button
                </button>
                <button className="w-full bg-success hover:bg-success/90 text-success-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                  Success Button
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Status Indicators</h3>
              <div className="space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-light text-success">
                  Success Status
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warning-light text-warning">
                  Warning Status
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-error-light text-error">
                  Error Status
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brand Philosophy */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            “Turning every cycle into value, even the smallest ones.”
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our color system reflects this philosophy through progressive color variations, 
            ensuring every design element contributes to a cohesive, professional appearance 
            that builds trust and demonstrates expertise in software consulting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
