"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function KYCDocuments() {
  const [documents] = useState([
    {
      id: "1",
      type: "Identity Document",
      name: "passport.pdf",
      status: "approved",
      uploadDate: "2024-01-10",
    },
    {
      id: "2",
      type: "Proof of Address",
      name: "utility_bill.pdf",
      status: "pending",
      uploadDate: "2024-01-15",
    },
    {
      id: "3",
      type: "Bank Statement",
      name: "",
      status: "required",
      uploadDate: "",
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "required":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "required":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* KYC Status */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Verification Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">Verification In Progress</h3>
              <p className="text-sm text-muted-foreground">
                Your account verification is being reviewed. This usually takes 1-2 business days.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Upload */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-card-foreground">Required Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(doc.status)}
                  <div>
                    <div className="font-medium text-card-foreground">{doc.type}</div>
                    {doc.name && <div className="text-sm text-muted-foreground">{doc.name}</div>}
                    {doc.uploadDate && <div className="text-xs text-muted-foreground">Uploaded: {doc.uploadDate}</div>}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                  {doc.status === "required" && (
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  )}
                  {doc.status === "pending" && (
                    <Button variant="outline" size="sm">
                      Replace
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Document Requirements</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Documents must be clear and readable</li>
              <li>• Accepted formats: PDF, JPG, PNG</li>
              <li>• Maximum file size: 10MB</li>
              <li>• Documents must be in English or officially translated</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
