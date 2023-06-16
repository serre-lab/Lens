# LENS Project

_Thomas Fel, Thomas Serre_

<br>

Carney Institute for Brain Science, <a href="https://serre-lab.clps.brown.edu/">Brown University (Providence, USA)</a>, <br> 
<a href="https://deel.ai/"> DEEL</a> Team - Artificial and Natural Intelligence Toulouse Institute </span>

<br>


<p align="center">
  <b><a href="https://serre-lab.github.io/Lens/classes/espresso/"> Getting Started » </a></b>
</p>


<p align="center">
  This project is the result of several articles, the most notable ones being <br>
  <a href="https://arxiv.org/abs/2211.10154" style="color: rgb(84, 134, 255)"><strong>CRAFT </strong></a> ·
  <a href="https://arxiv.org/abs/2306.06805" style="color: rgb(62, 147, 131)"><strong>MACO </strong></a> ·
  <a href="https://arxiv.org/abs/2306.07304" style="color: rgb(250, 189, 56)"><strong>Holistic</strong></a>
  <br>
  <br>
</p>

<div class="image-intro">
    <img src="https://serre-lab.github.io/Lens/assets/lens_intro.jpg" width=100%>
</div>

This project aims to characterize the strategies, identify key features used by state-of-the-art models trained on ImageNet, and detect biases using the latest explainability methods: Concept-based explainability, Attribution methods, and Feature Visualization. We show that these approaches, far from being antagonistic, can be complementary in helping better understand  models.

The illustrated model in this project is a ResNet50, where each class in ImageNet has its dedicated page highlighting the concepts used by the model to classify that particular class.

A normalized importance score is calculated for each concept, indicating the concept's significance for the class. For example, an importance level of 0.30 means that the concept contributes 30% of the sum of logits for all points classified as that class.

The <a href="https://serre-lab.github.io/Lens/method/">"LENS Method"</a> page provides an introduction explaining how to interpret the results.


## 🤝 Contributors

Thomas Fel developed the data and the website itself. However, the website relies on numerous published studies, with each member considered a contributor to the project.

<a href="https://arxiv.org/abs/2211.10154" style="color: rgb(84, 134, 255)"><strong>CRAFT</strong></a>:
Thomas Fel<sup>⭑</sup>, Agustin Picard<sup>⭑</sup>, Louis Béthune<sup>⭑</sup>, Thibaut Boissin<sup>⭑</sup>, David Vigouroux, Julien Colin, Rémi Cadène & Thomas Serre.

<a href="https://arxiv.org/abs/2306.06805" style="color: rgb(62, 147, 131)"><strong>MACO</strong></a>:
Thomas Fel<sup>⭑</sup>, Thibaut Boissin<sup>⭑</sup>, Victor Boutin<sup>⭑</sup>, Agustin Picard<sup>⭑</sup>, Paul Novello<sup>⭑</sup>, Julien Colin, Drew Linsley, Tom Rousseau, Rémi Cadène, Laurent Gardes & Thomas Serre.

<a href="https://arxiv.org/abs/2306.07304" style="color: rgb(250, 189, 56)"><strong>Holistic</strong></a>:
Thomas Fel<sup>⭑</sup>, Victor Boutin<sup>⭑</sup>, Mazda Moayeri, Rémi Cadène, Louis Béthune, Léo Andeol, Mathieu Chalvidal & Thomas Serre.

## 👀 See Also:

Furthermore, this work heavily builds on seminal research in explainable AI, specifically the work on concepts by Been Kim et al.[^1] and ACE[^2] for the automatic extraction of concept activation vectors (CAVs). More recently, the research on invertible concepts[^3] and their impressive human experiments.

Regarding the feature visualization, this work builds on the insightful articles published by the Clarity team at OpenAI[^4], notably the groundbreaking work by Chris Olah et al[^5]. Similarly, their recent work on mechanistic interpretability[^7] and the concept of superposition[^6] has motivated us to explore dictionary learning methods.

Several articles have greatly inspired the development of the attribution method[^11] and importance estimation, ranging from attribution metrics[^10] [^12] [^13] to more recent theoretical insights [^8] [^9].

**A more comprehensive list of this foundational body of work is discussed in the three articles that form the foundation of our project.**



## 🗞️ Citation

If you are using LENS as part of your workflow in a scientific publication, please consider citing one of the articles we build on:

```latex
@inproceedings{fel2023craft,
      title     = {CRAFT: Concept Recursive Activation FacTorization for Explainability},
      author    = {Thomas Fel and Agustin Picard and Louis Bethune and Thibaut Boissin
                  and David Vigouroux and Julien Colin and Rémi Cadène and Thomas Serre},
      year      = {2023},
      booktitle = {Proceedings of the IEEE Conference on Computer Vision and 
                   Pattern Recognition (CVPR)},
}
```
```latex
@article{fel2023holistic,
  title         = {A Holistic Approach to Unifying Automatic Concept Extraction 
                  and Concept Importance Estimation},
  author        = {Thomas Fel and Victor Boutin and Mazda Moayeri and Rémi Cadène and Louis Bethune
                  and Léo andéol and Mathieu Chalvidal and Thomas Serre},
  journal       = {arXiv preprint arXiv:2306.07304},
  year          = {2023}
}
```
```latex
@article{fel2023unlocking,
  title         = {Unlocking Feature Visualization for Deeper Networks with 
                  MAgnitude Constrained Optimization},
  author        = {Thomas Fel and Thibaut Boissin and Victor Boutin and Agustin Picard and
                  Paul Novello and Julien Colin and Drew Linsley and Tom Rousseau and
                  Rémi Cadène and Laurent Gardes, Thomas Serre},
  journal       = {arXiv preprint arXiv:2306.06805},
  year          = {2023}
}
```

## 📝 License

The package is released under <a href="https://choosealicense.com/licenses/mit"> MIT license</a>.


[^1]: [Interpretability Beyond Feature Attribution: Quantitative Testing with Concept Activation Vectors (TCAV) (2018).](https://arxiv.org/abs/1711.11279)
[^2]: [Towards Automatic Concept-based Explanations (ACE) (2019).](https://arxiv.org/abs/1902.03129)
[^3]: [Invertible Concept-based Explanations for CNN Models with Non-negative Concept Activation Vectors (2021).](https://arxiv.org/abs/2006.15417)
[^4]: [Thread: Circuits: What can we learn if we invest heavily in reverse engineering a single neural network? (2020).](https://distill.pub/2020/circuits/)
[^5]: [Feature Visualization: How neural networks build up their understanding of images (2017).](https://distill.pub/2017/feature-visualization/)
[^6]: [Toy Models of Superposition (2022).](https://transformer-circuits.pub/2022/toy_model/index.html)
[^7]: [Progress measures for Grokking via Mechanistic Interpretability (2023).](https://arxiv.org/pdf/2301.05217.pdf)
[^8]: [Which explanation should i choose? a function approximation perspective to characterizing post hoc explanations.](https://arxiv.org/pdf/2206.01254.pdf)
[^9]: [Towards the Unification and Robustness of Perturbation and Gradient Based Explanations.](http://proceedings.mlr.press/v139/agarwal21c/agarwal21c.pdf)
[^10]: [Towards Faithfully Interpretable NLP Systems: How Should We Define and Evaluate Faithfulness?](https://aclanthology.org/2020.acl-main.386.pdf)
[^11]: [Interpretable Explanations of Black Boxes by Meaningful Perturbation](https://arxiv.org/abs/1704.03296)
[^12]: [On the (In)fidelity and Sensitivity of Explanations](https://proceedings.neurips.cc/paper_files/paper/2019/file/a7471fdc77b3435276507cc8f2dc2569-Paper.pdf)
[^13]: [Evaluating and Aggregating Feature-based Model Explanation](https://arxiv.org/pdf/2005.00631.pdf)