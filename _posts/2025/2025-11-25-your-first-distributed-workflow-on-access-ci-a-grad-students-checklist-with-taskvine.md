---
layout: post
title: "Your First Distributed Workflow on ACCESS CI: A Grad Student’s Checklist with TaskVine"
date: "2025-11-25T00:00:00"
author: Saiful Islam
image: /assets/blog/2025/your-first-distributed-workflow-on-access-ci-a-grad-students-checklist-with-taskvine/catalog.png
categories:
  - guide
tags:
  - access
  - ospool
  - guide
  - howto
description: Most students start with Discover or Explore, and approvals usually take only a few days.
toc: false
related_posts: true
---

## What This Guide Is (and Isn’t)

If you’re a student who wants to run real distributed computing experiments—without fighting half a dozen HPC manuals—you’re in the right place. This post is a quick, practical checklist to help you:

- get an ACCESS CI allocation,
- choose the right resources (Purdue Anvil, Stampede3, etc.),
- log in for the first time, and
- run a minimal TaskVine workflow across real HPC nodes.

This is not a replacement for the official docs. ACCESS CI, Anvil, Stampede3, and TaskVine all have excellent detailed documentation. You’ll find direct links throughout this guide.

Think of this post as your “start here” map—a student-friendly path from I’ve never used ACCESS to I ran my distributed workflow on an NSF funded HPC machine.

## What Is ACCESS CI

**[ACCESS CI](https://access-ci.org/)**(Advanced Cyberinfrastructure Coordination Ecosystem: Services & Support) is a nationwide, NSF-funded program that gives U.S.-based researchers **free computing and storage resources**. If you’re doing academic research—even as a first-year grad student or undergrad—you can request allocations and run your workflows on top-tier HPC systems.

When you request an allocation, you create an ACCESS project and choose a project type:

- **Explore** — Small, quick-start allocations for testing resources or class projects.
- **Discover** — Moderate allocations for active research or larger coursework.
- **Accelerate** — Mid-scale allocations for sustained, collaborative research.
- **Maximize** — Large-scale, high-impact research requiring major resources.

Most students start with **Discover** or **Explore** , and approvals usually take only a few days.

#### ACCESS CI vs OSPool (super short version)

**[OSPool](https://osg-htc.org/services/ospool/)** is another free national computing service—part of the OSG/OSDF ecosystem—that provides **high-throughput compute on opportunistic resources**. You log in to a **single access point** and submit your workflow, and OSPool automatically distributes your tasks to whatever compute resources are available across the country.

**[ACCESS CI](https://access-ci.org/)** , in contrast, uses an **allocation and credit-based model**. You request an allocation, receive credits, and then “spend” those credits on **specific HPC systems** (like Anvil or Stampede3). You get scheduled jobs, predictable queue behavior, and access to fixed hardware configurations (e.g., large-memory nodes, GPUs, high-speed filesystems).

In short:

- **OSPool** is great for workloads that are embarrassingly parallel, tolerant of variable performance, and don’t require specific node types.

- **ACCESS CI** is great when you need **predictable resources** , specific hardware (like GPUs or large-memory nodes), or access to a particular HPC environment.

## Checklist Overview (The Whole Journey at a Glance)

This is the full path we’ll walk through in the rest of the post:

1. Create an ACCESS CI account
2. Find the resources you need for your project
3. Prepare and submit your request
4. Pick a site (exchange credits)
5. Set up SSH keys and log in to the sites
6. Install TaskVine
7. Run your first TaskVine workflow
8. Debugging & Next Steps

#### Where these steps are documented

- **Steps 1–4** are well-documented on the ACCESS CI site:
  👉 <https://allocations.access-ci.org/get-your-first-project>

- **Step 5** (logging in, SSH, MFA, environment modules) varies by site and is documented in each system’s user guide (e.g., Anvil, Stampede3).

- **Steps 6 and 7** (installing TaskVine and running a TaskVine workflow) are covered in the [official TaskVine manual](https://cctools.readthedocs.io/en/stable/taskvine/).

**This guide brings all of them together in one place** , filling in the gaps so you can follow a smooth end-to-end workflow—from getting an allocation to running your very first distributed TaskVine program on an NSF HPC machine.

## Step 1 — Create an ACCESS CI Account

There are **two ways to register** for an ACCESS account, but the fastest option is to log in with your **existing university identity**. Most U.S. universities are supported—just choose your campus from the dropdown, click Log On, and follow the email-verification step.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/your-first-distributed-workflow-on-access-ci-a-grad-students-checklist-with-taskvine/create-account.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

If your university isn’t listed, you can register by creating an ACCESS-specific username, password, and Duo MFA.

Full instructions are here:

👉 <https://operations.access-ci.org/identity/new-user>

## Step 2 — Choosing Resources for Your Project

ACCESS CI offers many HPC systems—CPUs, GPUs, large-memory nodes, and cloud resources. The easiest way to browse them is the ACCESS Resource Catalog:

👉 <https://allocations.access-ci.org/resources>

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/your-first-distributed-workflow-on-access-ci-a-grad-students-checklist-with-taskvine/catalog.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

#### How to pick the right resource

- **Choose the simplest site that fits your needs.**
  For most introductory TaskVine workflows, standard CPU-only systems are sufficient.

- **Consider credit cost.**
  Each site [charges different ACCESS credits ](https://allocations.access-ci.org/exchange_calculator?layout=popup&for_allocation_type_id=500881)per CPU-hour or GPU-hour.
  If you don’t need GPUs or large-memory nodes, pick a **CPU-only site** to make your credits last longer.
- **Match the site to your workflow.**
- CPU-only workloads → pick sites that offer regular CPU nodes (no GPUs needed).
- GPU workloads → choose GPU-capable systems.
- High-memory jobs → pick sites offering LM/XL nodes.
- **Need help choosing?**
  You can ask the ACCESS team for personalized resource suggestions here:
  👉 <https://ara.access-ci.org/>

For this guide, we’ll use **Purdue Anvil** and **TACC Stampede3** because they are beginner-friendly and well-documented.

## **Step 3 — Prepare and Submit Your Request**

To submit an Explore request, you only need a few pieces of information and some simple PDFs. The full instructions are here:

👉 <https://allocations.access-ci.org/get-your-first-project>

#### What to prepare

- A **project title**

- A **short overview** describing what you plan to run and why you need ACCESS

- **Your own information** (you are the PI for this ACCESS project)

- Optional: grant number if your work is funded

- **Two PDF files:**

- Your **CV or résumé** (max 3 pages)

- If you are a **graduate student PI** , a **brief advisor support letter** (PDF)

- (For class projects, upload a syllabus instead of a letter)

- **Available Resources**
- When the form asks which resources you want, simply **check “ACCESS Credits.”**

#### Submitting

Once everything is ready:

- Go to 👉 [https://allocations.access-ci.org/](https://allocations.access-ci.org)
- Click Request New Project
- Select Explore ACCESS
- Fill out the form, upload your PDFs, and click Submit

Explore requests are usually approved by the next business day, so keep an eye on your email.

## Step 4 — Pick a Site (Exchange Credits)

Once your Explore project is approved, you’ll see it listed in the **My Projects** section of the [Allocations Portal](https://allocations.access-ci.org/).

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/your-first-distributed-workflow-on-access-ci-a-grad-students-checklist-with-taskvine/project-detail.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

#### How to exchange credits

1. Open your project and go to **Credits + Resources**.

2. Click **Add a Resource**.

3. In the dropdown, **search for the site you selected in Step 2** (e.g., a CPU-only site).

4. Enter how many **SUs** , **Node Hours** , or **GPU Hours** you want to allocate.

#### What this means

Exchanging credits “activates” your access to that cluster.
After approval, you’ll be able to log in and submit jobs there.

#### How long it takes

Exchange requests are usually approved **within a few days (up to one week)**.

## **Step 5 — Set Up SSH Keys and Log In**

Each ACCESS site has its own login process, but the most popular systems—Anvil and Stampede3—are very well documented. On your Credits + Resources page, you’ll see a small book icon next to every site. Clicking it takes you directly to that site’s official documentation.

For convenience, here are the two sites we are using in this guide:

Anvil Documentation:

👉 <https://www.rcac.purdue.edu/anvil#docs>

Stampede3 Documentation:

👉 <https://docs.tacc.utexas.edu/hpc/stampede3/>

You should always follow the **official documentation** , because login steps (especially MFA) may change after this blog is written.
Here is a brief summary of what to expect:

### Anvil (Purdue) — Quick Summary

1. Visit Anvil**OnDemand:**
   👉 <https://ondemand.anvil.rcac.purdue.edu>

2. Log in and set up **ACCESS Duo** MFA.

3. Use the OnDemand interface to **upload your SSH public key**.

4. Then you can log in via SSH:

```
ssh -l <anvil username>> anvil.rcac.purdue.edu
```

#### Important: Your Anvil username

- Your Anvil username **starts with`x-`**, e.g., `x-mislam5`.

- This is **not the same** as your ACCESS username.

- You can see your exact Anvil username on your **Credits + Resources** page next to the Anvil resource entry.

#### Notes from the official docs

- Anvil **does not accept passwords** — only SSH keys.

- Your ACCESS password will not work for SSH.

- SSH keys must be created or uploaded through the OnDemand interface.

### Stampede3 (TACC) — Quick Summary

1. Log in to the TACC Accounts Portal:
   <https://accounts.tacc.utexas.edu/login?redirect_url=profile>

2. Accept the usage agreement and set up **TACC’s MFA**.

3. Then SSH into the system:

```
ssh <username>@stampede3.tacc.utexas.edu

```

You’ll be prompted for your password and MFA token.

Full instructions:
👉 <https://docs.tacc.utexas.edu/hpc/stampede3/#access>

## **Step 6 — Install TaskVine**

Once you can log in to your HPC site, the next step is installing **TaskVine**.
TaskVine is part of the **CCTools** suite and is easiest to install through **Conda**.

Most HPC sites provide their own Conda modules, but these are often outdated.
We recommend installing a fresh **[Miniforge](https://github.com/conda-forge/miniforge#install)** in your home directory and using that environment for TaskVine.

Official installation guide:
👉 <https://cctools.readthedocs.io/en/stable/install/>

Here’s the **quick version** :

#### Install CCTools (TaskVine) with Conda

```
# Create your environment (run once)
conda create -n cctools-env -y -c conda-forge --strict-channel-priority python ndcctools
```

```
# Activate the environment (run every time)
conda activate cctools-env
```

After this, TaskVine is ready to use on your HPC site.

## **Step 7 — Run Your First TaskVine Workflow**

Now that TaskVine is installed, let’s run your very first distributed workflow.
We’ll use the **TaskVine Quickstart** example from the official docs, with one small change:

- Instead of choosing a fixed port, we set **`port=0`** , which lets TaskVine automatically pick an available port.

- We give the manager a name (`tv-quickstart-blog`) so **`vine_factory`** can discover it without you typing hostnames or ports.

Create a directory on a **shared filesystem** (e.g., `$HOME` on Anvil or `/work/...` on Stampede3).
Inside it, create a file named **`quickstart.py`** and paste:

```python
# quickstart.py

import ndcctools.taskvine as vine

# Create a new manager
m = vine.Manager(name ="tv-quickstart-blog", port=0)

print(f"Listening on port {m.port}")

# Declare a common input file to be shared by multiple tasks.
f = m.declare_url("https://www.gutenberg.org/cache/epub/2600/pg2600.txt", cache="workflow")

# Submit several tasks using that file.
print("Submitting tasks...")

for keyword in ['needle', 'house', 'water']:
    task = vine.Task(f"grep {keyword} warandpeace.txt | wc")
    task.add_input(f, "warandpeace.txt")
    task.set_cores(1)
    m.submit(task)

# As they complete, display the results:
print("Waiting for tasks to complete...")

while not m.empty():
    task = m.wait(5)

    if task:
        print(f"Task {task.id} completed with result {task.output}")

print("All tasks done.")

```

### Run the manager

Open one terminal (or one tmux pane) and activate your environment:

```
conda activate cctools-env
python quickstart.py
```

Leave this running.
The manager will start, pick an open port, and publish itself to the TaskVine catalog.

### Start workers using vine_factory

Instead of running workers manually, we use vine_factory to submit workers through Slurm.

Basic command:

```
vine_factory -Tslurm --manager-name tv-quickstart-blog
```

However, each cluster usually requires a few Slurm batch options, which you pass using --batch-options.

**Stampede3 example**

Stampede3 generally expects a partition and a wall-clock limit:

```
vine_factory -Tslurm --manager-name tv-quickstart-blog --batch-options "-p icx -t 01:00:00"
```

More details:

👉 <https://docs.tacc.utexas.edu/hpc/stampede3/#running>

**Anvil example**

Anvil requires selecting a partition (queue). For example:

```
vine_factory -Tslurm --manager-name tv-quickstart-blog --batch-options "-p wide"
```

More details:

👉 <https://www.rcac.purdue.edu/knowledge/anvil/run/partitions>

### What happens next

- vine_factory submits Slurm jobs that run **Vine workers** on compute nodes.
- When those workers start, they automatically connect to the manager using the name tv-quickstart-blog (through the TaskVine catalog).
- The manager sends tasks to each worker as they connect.

<div class="row justify-content-sm-center">
<div class="col-sm-12">
{% include figure.liquid path="/assets/blog/2025/your-first-distributed-workflow-on-access-ci-a-grad-students-checklist-with-taskvine/taskvine-terminal.png" title="" class="img-fluid rounded z-depth-1" zoomable=true %}
</div>
</div>

In the first terminal, you will eventually see the results. Each task is computed on a node in the cluster. Depending on the queue and resource availability, it may take some time for workers to start and complete the tasks.

## Debugging & Next Steps

If you’ve made it this far and your workflow ran successfully — **congratulations!**

You’ve just deployed a real distributed TaskVine workflow on an ACCESS HPC cluster.

But if things _didn’t_ work on the first try, here are the most common issues and how to fix them.

### Things That Can Go Wrong (and How to Fix Them)

#### 1. Workers are running, but no tasks ever complete

You checked squeue and see the Vine worker jobs are active, but the manager terminal never shows progress.

This almost always means:

**the compute node cannot connect back to the manager’s TCP port.**

To confirm, run a simple TCP test Slurm job (outside TaskVine) that tries to connect from a compute node → login node. If that fails, workers will never reach the manager. This problem depends on site network rules, so test it early.

#### 2. Missing or incorrect Slurm batch options

Every cluster has slightly different expectations.

Check the site’s documentation for required options like:

- partition (-p)
- wall time (-t)
- constraints
- account or project flags
  If workers never start or get rejected, this is usually the reason.

**3. Vine Factory should use a shared filesystem**

The worker scripts need to access some files provided by vine_factory.

To keep things simple and reliable, you should either:

- run vine_factory from a **shared filesystem** (one that is mounted on the compute nodes), or
- set --scratch-dir to a directory on a **shared filesystem**.

Check your site’s documentation to see **which partitions/directories are visible from compute nodes**. For example, some clusters share $HOME, while others require you to use a /work or /project directory.

### What’s Next

If your quickstart worked—great! You now have a full TaskVine workflow running on an ACCESS CI cluster.

Here are a few things you can try next:

- Read the TaskVine manual to explore caching, retries, and performance tuning
- Increase the number of workers and test scaling
- Try larger or real research datasets
- Experiment with additional ACCESS CI sites

TaskVine grows with your research, and you now have the foundation to scale up your workflows with confidence.
