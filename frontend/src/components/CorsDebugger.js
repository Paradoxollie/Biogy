import React, { useState } from 'react';
import { testCorsConfig } from '../services/corsTest';
import { Card, Button, Alert, Spinner, Badge, Accordion } from 'react-bootstrap';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const CorsDebugger = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runTests = async () => {
    setLoading(true);
    setError(null);
    try {
      const testResults = await testCorsConfig();
      setResults(testResults);
    } catch (err) {
      console.error('Error running CORS tests:', err);
      setError(err.message || 'Une erreur est survenue pendant les tests');
    } finally {
      setLoading(false);
    }
  };

  const renderSeverityBadge = (severity) => {
    switch (severity) {
      case 'critical':
        return <Badge bg="danger">Critique</Badge>;
      case 'high':
        return <Badge bg="warning">Élevé</Badge>;
      case 'medium':
        return <Badge bg="info">Moyen</Badge>;
      case 'low':
        return <Badge bg="secondary">Faible</Badge>;
      default:
        return <Badge bg="secondary">{severity}</Badge>;
    }
  };

  const renderTestResult = (test, index) => {
    return (
      <Card className="mb-2" key={index}>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              <strong>{test.type}</strong> {test.url}
            </span>
            {test.success ? (
              <Badge bg="success"><FaCheck /> Succès</Badge>
            ) : (
              <Badge bg="danger"><FaTimes /> Échec</Badge>
            )}
          </div>
        </Card.Header>
        <Card.Body>
          <div className="mb-2">
            <strong>Status:</strong> {test.statusCode || 'N/A'}
            {test.duration && <span className="ms-3">Durée: {test.duration.toFixed(2)}ms</span>}
          </div>
          
          {test.error && (
            <Alert variant="danger">
              <strong>Erreur:</strong> {test.error.message}
              {test.error.isCorsError && <p className="mt-1 mb-0"><FaExclamationTriangle /> Erreur CORS détectée</p>}
            </Alert>
          )}
          
          <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Headers CORS</Accordion.Header>
              <Accordion.Body>
                {Object.keys(test.corsHeaders).length > 0 ? (
                  <pre className="bg-light p-2" style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {JSON.stringify(test.corsHeaders, null, 2)}
                  </pre>
                ) : (
                  <Alert variant="warning">Aucun header CORS trouvé dans la réponse</Alert>
                )}
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Réponse complète</Accordion.Header>
              <Accordion.Body>
                <pre className="bg-light p-2" style={{ maxHeight: '200px', overflow: 'auto' }}>
                  {JSON.stringify(test.data || {}, null, 2)}
                </pre>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="container my-4">
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h2>Diagnostique CORS</h2>
        </Card.Header>
        <Card.Body>
          <p>
            Cet outil analyse la configuration CORS entre ce frontend et le backend API.
            Il effectue différents types de requêtes pour détecter les problèmes potentiels.
          </p>
          
          <div className="d-flex justify-content-between align-items-center">
            <Button 
              variant="primary" 
              onClick={runTests} 
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Exécution des tests...</span>
                </>
              ) : (
                'Lancer les tests CORS'
              )}
            </Button>
            
            {results && (
              <span className="text-muted">
                {new Date(results.environment.timestamp).toLocaleString()}
              </span>
            )}
          </div>
          
          {error && (
            <Alert variant="danger" className="mt-3">
              <FaTimes /> {error}
            </Alert>
          )}
        </Card.Body>
      </Card>

      {results && (
        <>
          <Card className="mb-4">
            <Card.Header className="bg-info text-white">
              <h3>Environnement</h3>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <p><strong>API URL:</strong> {results.environment.apiUrl}</p>
                  <p><strong>Navigateur:</strong> {results.environment.browserInfo}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>Frontend:</strong> {window.location.origin}</p>
                  <p><strong>Durée totale:</strong> {results.totalTime ? `${results.totalTime.toFixed(2)}ms` : 'N/A'}</p>
                </div>
              </div>
            </Card.Body>
          </Card>

          {results.issues.length > 0 && (
            <Card className="mb-4 border-warning">
              <Card.Header className="bg-warning">
                <h3>Problèmes détectés ({results.issues.length})</h3>
              </Card.Header>
              <Card.Body>
                {results.issues.map((issue, index) => (
                  <Alert variant="warning" key={index}>
                    <div className="d-flex align-items-center mb-1">
                      <FaExclamationTriangle className="me-2" />
                      <strong>{issue.message}</strong>
                      <span className="ms-2">{renderSeverityBadge(issue.severity)}</span>
                    </div>
                    {issue.details && <p className="mb-0 small">{issue.details}</p>}
                  </Alert>
                ))}
              </Card.Body>
            </Card>
          )}

          {results.suggestions.length > 0 && (
            <Card className="mb-4 border-info">
              <Card.Header className="bg-info text-white">
                <h3>Suggestions ({results.suggestions.length})</h3>
              </Card.Header>
              <Card.Body>
                {results.suggestions.map((suggestion, index) => (
                  <Alert variant="info" key={index}>
                    <div className="d-flex align-items-center mb-1">
                      <FaInfoCircle className="me-2" />
                      <strong>{suggestion.message}</strong>
                      {suggestion.priority && (
                        <span className="ms-2">
                          <Badge bg={suggestion.priority === 'high' ? 'warning' : 'info'}>
                            {suggestion.priority}
                          </Badge>
                        </span>
                      )}
                    </div>
                    {suggestion.code && (
                      <pre className="bg-light p-2 mt-2 small" style={{ maxHeight: '200px', overflow: 'auto' }}>
                        {suggestion.code}
                      </pre>
                    )}
                  </Alert>
                ))}
              </Card.Body>
            </Card>
          )}

          <Card className="mb-4">
            <Card.Header className="bg-secondary text-white">
              <h3>Résultats des tests</h3>
            </Card.Header>
            <Card.Body>
              {results.tests.map(renderTestResult)}
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
};

export default CorsDebugger; 